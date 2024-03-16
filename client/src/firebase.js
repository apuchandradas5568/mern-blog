// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-49b4e.firebaseapp.com",
  projectId: "mern-blog-49b4e",
  storageBucket: "mern-blog-49b4e.appspot.com",
  messagingSenderId: "265551394091",
  appId: "1:265551394091:web:7c332fe2c6b415d0e1816e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

