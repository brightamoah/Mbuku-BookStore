// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW5qQHo8QmatE9BcsLOrpM2HoJPYbkw-o",
  authDomain: "mbuku-bookstore.firebaseapp.com",
  projectId: "mbuku-bookstore",
  storageBucket: "mbuku-bookstore.appspot.com",
  messagingSenderId: "212911618344",
  appId: "1:212911618344:web:5b27763828b9cf6ba0381d",
  measurementId: "G-5YHRCLC9GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);