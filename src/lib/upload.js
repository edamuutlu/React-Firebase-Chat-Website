import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }

  const date = new Date().toISOString();
  const storageRef = ref(storage, `images/${date}_${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload error:", error);
        switch (error.code) {
          case 'storage/unauthorized':
            reject("User doesn't have permission to access the object");
            break;
          case 'storage/canceled':
            reject("User canceled the upload");
            break;
          case 'storage/unknown':
            reject("Unknown error occurred, inspect error.serverResponse");
            break;
          default:
            reject("An error occurred during upload: " + error.message);
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            reject("Failed to get download URL");
          });
      }
    );
  });
};

export default upload;