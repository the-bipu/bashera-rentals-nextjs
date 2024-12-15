import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAXqeX9pw572ykJyKt2P9eVa5R6R8QZvJI",
    authDomain: "advise-generator.firebaseapp.com",
    projectId: "advise-generator",
    databaseURL: "https://advise-generator-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "advise-generator.firebasestorage.app",
    messagingSenderId: "838021795787",
    appId: "1:838021795787:web:69e053d7c8e8f8bd69b04e",
    measurementId: "G-48FPLFZ681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);