// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzSZHCHR_fGsj9g8v5YUua3NgCjbWEaxo",
  authDomain: "dragon-news-braking-66610.firebaseapp.com",
  projectId: "dragon-news-braking-66610",
  storageBucket: "dragon-news-braking-66610.firebasestorage.app",
  messagingSenderId: "726127452645",
  appId: "1:726127452645:web:f9d08719711f803967cf0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;