// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBhXdXueYTyuTKbKP1U93Bti8GctoBV0ME",
  authDomain: "journeycapturerbackend.firebaseapp.com",
  databaseURL:
    "https://journeycapturerbackend-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "journeycapturerbackend",
  storageBucket: "journeycapturerbackend.appspot.com",
  messagingSenderId: "973927811642",
  appId: "1:973927811642:web:2e559323148da1fd6d4303",
  measurementId: "G-N9V1HDKNC4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.database();
