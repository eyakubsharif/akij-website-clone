// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEbnJvTVAXzs0d-A85_yJeVTKQ0apDy8",
  authDomain: "email-password-auth-2-2ec47.firebaseapp.com",
  projectId: "email-password-auth-2-2ec47",
  storageBucket: "email-password-auth-2-2ec47.firebasestorage.app",
  messagingSenderId: "996840177297",
  appId: "1:996840177297:web:0889788db2fb598d09c930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);