import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiiucHB9GVMAZji24sd9UZOc5OyUqpSAk",
    authDomain: "mezzzage-x.firebaseapp.com",
    projectId: "mezzzage-x",
    storageBucket: "mezzzage-x.appspot.com",
    messagingSenderId: "418794133743",
    appId: "1:418794133743:web:7288a8bcde5c1ea895a31a"
};

export const app = initializeApp(firebaseConfig);