import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApidR5S1gwZ0YHif8xuLqeNGdAQw22N_U",
  authDomain: "shopwebsite-react.firebaseapp.com",
  projectId: "shopwebsite-react",
  storageBucket: "shopwebsite-react.appspot.com",
  messagingSenderId: "1094005799418",
  appId: "1:1094005799418:web:13bd6fe20b33bcb6a20c43",
  measurementId: "G-P5P4Y0JBVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
