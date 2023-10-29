// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLsxF8MEI2njDW2KE5jLbTUPRRdjah34",
  authDomain: "coder-sustenix.firebaseapp.com",
  projectId: "coder-sustenix",
  storageBucket: "coder-sustenix.appspot.com",
  messagingSenderId: "389478128044",
  appId: "1:389478128044:web:a60007369399f6fb3ec209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)