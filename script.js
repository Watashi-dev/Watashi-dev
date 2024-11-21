import { initializeApp } from "https://www.gstatic.com/firebasejs/9.25.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.25.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
