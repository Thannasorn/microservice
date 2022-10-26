// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8mS7ZpphBYtsnWhnn0-uEYz4YREQP6HU",
  authDomain: "test-micro-21d5f.firebaseapp.com",
  projectId: "test-micro-21d5f",
  storageBucket: "test-micro-21d5f.appspot.com",
  messagingSenderId: "555159990069",
  appId: "1:555159990069:web:cb5b63a7d350ef6f8ee67c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = {firebase}