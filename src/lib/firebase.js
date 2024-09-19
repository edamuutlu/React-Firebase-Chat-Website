import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1f0e3.firebaseapp.com",
  projectId: "reactchat-1f0e3",
  storageBucket: "reactchat-1f0e3.appspot.com",
  messagingSenderId: "790148001172",
  appId: "1:790148001172:web:abd8a1e867c71910503381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();