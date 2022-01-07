// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKKYfsYRB93bhGTSB8rFi3jU5QCVQH3T4",
  authDomain: "bsp-learning.firebaseapp.com",
  projectId: "bsp-learning",
  storageBucket: "bsp-learning.appspot.com",
  messagingSenderId: "650353011122",
  appId: "1:650353011122:web:5972e52830cd2d382e9cab",
  measurementId: "G-NE3D1M0XZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);