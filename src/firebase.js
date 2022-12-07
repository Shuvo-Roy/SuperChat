// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABI04uqq_8Pi8-oyOHYIthQErr5xjr6zI",
  authDomain: "superchat-f3d86.firebaseapp.com",
  projectId: "superchat-f3d86",
  storageBucket: "superchat-f3d86.appspot.com",
  messagingSenderId: "141163769862",
  appId: "1:141163769862:web:be6fd5275dce4efd905387"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();