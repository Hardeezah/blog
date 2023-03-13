import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmYIz42r4dazGdG8SV_G134pChXcbu6CA",
  authDomain: "blog-app-96671.firebaseapp.com",
  projectId: "blog-app-96671",
  storageBucket: "blog-app-96671.appspot.com",
  messagingSenderId: "397867227339",
  appId: "1:397867227339:web:228a934585b677931a634e",
  measurementId: "G-J2QLMNVDRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
