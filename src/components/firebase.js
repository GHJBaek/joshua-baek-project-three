// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsT6ZtfPnytgFrF9RQWzb2dgykl0MusE0",
    authDomain: "nbaaveragestatapi.firebaseapp.com",
    databaseURL: "https://nbaaveragestatapi-default-rtdb.firebaseio.com",
    projectId: "nbaaveragestatapi",
    storageBucket: "nbaaveragestatapi.appspot.com",
    messagingSenderId: "574086420549",
    appId: "1:574086420549:web:3220e88681ef57b4a16b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);