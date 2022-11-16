// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiu-g96oLKnAmZ9e1HHQFQzwEHC6eMfTo",
  authDomain: "bc-pokedex.firebaseapp.com",
  projectId: "bc-pokedex",
  storageBucket: "bc-pokedex.appspot.com",
  messagingSenderId: "420166589213",
  appId: "1:420166589213:web:39860992857bf551c3dff4",
  measurementId: "G-NT5BT4B6ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();
