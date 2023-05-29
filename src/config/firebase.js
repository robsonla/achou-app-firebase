// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDrCF7_WiNwpK93H2pQdx5knA41Bh9mE",
  authDomain: "achou-app-b29bd.firebaseapp.com",
  projectId: "achou-app-b29bd",
  storageBucket: "achou-app-b29bd.appspot.com",
  messagingSenderId: "969184581750",
  appId: "1:969184581750:web:03ca7413ea052357dfe757",
  measurementId: "G-P679438ZQ9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;