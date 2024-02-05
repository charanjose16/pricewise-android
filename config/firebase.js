// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwp0bxe-WJZZ_mk__6bmrTc1aE26jm4Y",
  authDomain: "pricewise-b5a9b.firebaseapp.com",
  projectId: "pricewise-b5a9b",
  storageBucket: "pricewise-b5a9b.appspot.com",
  messagingSenderId: "1048958632369",
  appId: "1:1048958632369:web:3bcd919a2548dfa3217d90"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);