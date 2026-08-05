import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseAuth = require("firebase/auth");
const persistence = typeof firebaseAuth?.getReactNativePersistence === "function" ? firebaseAuth.getReactNativePersistence(ReactNativeAsyncStorage) : undefined;


const firebaseConfig = {
  apiKey: "AIzaSyAaNu7DS4tn1mPZDB1T5CGozuQssagSuV0",
  authDomain: "flux-114af.firebaseapp.com",
  projectId: "flux-114af",
  storageBucket: "flux-114af.firebasestorage.app",
  messagingSenderId: "49060285577",
  appId: "1:49060285577:web:c907526b6ff52b0f838a58",
  measurementId: "G-SM8WFXL0WP"
};


let app: FirebaseApp | null = null;
let auth: Auth;
// Initialize Firebase
export function initializeFirebase() {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  try {
    auth = initializeAuth(app, { persistence });
  } catch (error) {
    console.error("Error initializing auth", error);
    auth = getAuth(app);
  }
  return { app, auth };
}


export async function signUp(fullName: string, email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCredential.user, { displayName: fullName })
  return userCredential;
}


export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function getCurrentUser() {
  return auth.currentUser;
}

export function signOut() {
  return signOut();
}

export { app, auth };

