// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCbYphoDYT4sNaUMey1-AWosWUvUZWHRxo",
  authDomain: "slot-b.firebaseapp.com",
  projectId: "slot-b",
  storageBucket: "slot-b.appspot.com",
  messagingSenderId: "1084173927478",
  appId: "1:1084173927478:web:c9b75d794661410cb0c497",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
