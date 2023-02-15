// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCz3JfwTAytuCKDu1rYDJg55uGqTStzOzA",
  authDomain: "arcade-slot-booking.firebaseapp.com",
  projectId: "arcade-slot-booking",
  storageBucket: "arcade-slot-booking.appspot.com",
  messagingSenderId: "385188826990",
  appId: "1:385188826990:web:8d613df628e2841a66bb7f",
  measurementId: "G-6RKP9DXM9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
