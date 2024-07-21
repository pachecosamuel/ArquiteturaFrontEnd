import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyA_b8-KEWNdVbqzJUg4YDC_3nQwWU-wVJM",
    authDomain: "suamelhorversao-7.firebaseapp.com",
    databaseURL: "https://suamelhorversao-7-default-rtdb.firebaseio.com",
    projectId: "suamelhorversao-7",
    storageBucket: "suamelhorversao-7.appspot.com",
    messagingSenderId: "812755587425",
    appId: "1:812755587425:web:386692f25be736070d7520",
    measurementId: "G-NZL6M3E1Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

