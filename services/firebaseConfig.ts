// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth , signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNu7DS4tn1mPZDB1T5CGozuQssagSuV0",
  authDomain: "flux-114af.firebaseapp.com",
  projectId: "flux-114af",
  storageBucket: "flux-114af.firebasestorage.app",
  messagingSenderId: "49060285577",
  appId: "1:49060285577:web:c907526b6ff52b0f838a58",
  measurementId: "G-SM8WFXL0WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signInWithPopup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email: string, password: string){
  return signInWithEmailAndPassword(auth, email, password);
}