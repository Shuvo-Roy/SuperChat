// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHa6szmqhO7cCVyZHPBaZTKvQDvEbfrw",
  authDomain: "superchat-shuvo.firebaseapp.com",
  projectId: "superchat-shuvo",
  storageBucket: "superchat-shuvo.appspot.com",
  messagingSenderId: "300029643371",
  appId: "1:300029643371:web:fc7c0585f506a8ea373f2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();