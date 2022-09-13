import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3PngwSqNoGPyOxZKIMDcbscp_M64MmJ0",
  authDomain: "shopwebsite-auth.firebaseapp.com",
  projectId: "shopwebsite-auth",
  storageBucket: "shopwebsite-auth.appspot.com",
  messagingSenderId: "723838566712",
  appId: "1:723838566712:web:9d6eff951f7f05485b01cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
