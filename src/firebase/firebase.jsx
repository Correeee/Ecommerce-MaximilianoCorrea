import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIRAP9aUzA7GVP8Z84YBLvQ0VOxAhuQlQ",
    authDomain: "ecommerce-coderhouse-ccee2.firebaseapp.com",
    projectId: "ecommerce-coderhouse-ccee2",
    storageBucket: "ecommerce-coderhouse-ccee2.appspot.com",
    messagingSenderId: "246400422477",
    appId: "1:246400422477:web:ef6a61cbfec801a3358204"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)