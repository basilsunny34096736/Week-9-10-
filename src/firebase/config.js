// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4uQYB3FBgdJb3RVZ65uPq9k4RuU0OD0Y",
  authDomain: "fit5032---week-7.firebaseapp.com",
  projectId: "fit5032---week-7",
  storageBucket: "fit5032---week-7.firebasestorage.app",
  messagingSenderId: "634374754025",
  appId: "1:634374754025:web:aac4b9f850883d70826a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
