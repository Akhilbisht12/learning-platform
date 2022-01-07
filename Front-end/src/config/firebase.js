import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKKYfsYRB93bhGTSB8rFi3jU5QCVQH3T4",
  authDomain: "bsp-learning.firebaseapp.com",
  projectId: "bsp-learning",
  storageBucket: "bsp-learning.appspot.com",
  messagingSenderId: "650353011122",
  appId: "1:650353011122:web:5972e52830cd2d382e9cab",
  measurementId: "G-NE3D1M0XZN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
