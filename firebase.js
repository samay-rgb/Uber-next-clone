// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVE_T5__hBgUXplgTfXy7CwIOBIwNJBII",
  authDomain: "uber-next-clone-935a8.firebaseapp.com",
  projectId: "uber-next-clone-935a8",
  storageBucket: "uber-next-clone-935a8.appspot.com",
  messagingSenderId: "230251643276",
  appId: "1:230251643276:web:23dc9a46651c7d788796a9",
  measurementId: "G-DMPD5M8YW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider, app };
