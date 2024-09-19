# 💬 Chat Application

**Chat Application** is a modern web application that provides real-time messaging capabilities. It leverages Firebase for its backend, offering users a fast and secure chat experience.

## 📚 Technologies

- **React:** For building the user interface.
- **Firebase:** For real-time database and authentication.
- **Vite:** A build tool for fast development and compilation.
- **Zustand:** For state management.
- **Emoji Picker React:** A library for emoji selection.

## ✨ Features

- **🚀 Real-Time Messaging:** Instantly send and receive messages.
- **🔒 User Authentication:** Secure login and registration system.
- **😊 Emoji Support:** Add emojis to your messages.
- **📷 Image Sharing:** Send images in chats.
- **📚 Read Receipts:** Indicate whether messages have been read.
- **🚫 Blocking Feature:** Block users and restrict communication with blocked users.

## 🚀 Getting Started

### ✅ Requirements

- [Node.js](https://nodejs.org/) (v14 or later)
- npm or yarn
- Firebase account and project

### 📦 Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    ```

2. **Install Dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Set Up Environment Variables:**

    Create a `.env` file in the root directory of the project and add your Firebase configuration details:

    ```env
    VITE_API_KEY=your_firebase_api_key
    ```

4. **Run the Application:**

    ```bash
    npm run dev
    ```

    The application will be running at `http://localhost:5173`.

### 🔥 Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to **Project Settings > General** and add your web app.
3. Copy the Firebase configuration and paste it into the `.env` file.

## 💡 Usage

1. **Log In or Sign Up:** Create an account or log in with your existing account.
2. **Start a Chat:** Select a user from the contact list to start a new chat.
3. **Send a Message:** Type your message in the input box and send it. Use the emoji button to add emojis.

---
