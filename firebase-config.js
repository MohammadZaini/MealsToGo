import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB694o8wlclJpUWRdr_weTReML0Bi91I_g",
    authDomain: "meal-to-go-b785d.firebaseapp.com",
    projectId: "meal-to-go-b785d",
    storageBucket: "meal-to-go-b785d.appspot.com",
    messagingSenderId: "1093092046975",
    appId: "1:1093092046975:web:a08fea0f8132fb0030674a",
    measurementId: "G-B11Y9F9N1D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)