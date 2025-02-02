// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBp_olIyw9y67ePYyMsxMFyCII0Z2kwE",
  authDomain: "agri-asap.firebaseapp.com",
  projectId: "agri-asap",
  storageBucket: "agri-asap.firebasestorage.app",
  messagingSenderId: "33130186444",
  appId: "1:33130186444:web:305c72fa9b970d85a2a469",
  measurementId: "G-WZP1C2KQWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);