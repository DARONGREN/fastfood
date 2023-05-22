import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyDhgsi34BWFgtr4xkmc2CjJAB-4bgSU4_I",
  
    authDomain: "fasefood-d6879.firebaseapp.com",
  
    databaseURL: "https://fasefood-d6879-default-rtdb.firebaseio.com",
  
    projectId: "fasefood-d6879",
  
    storageBucket: "fasefood-d6879.appspot.com",
  
    messagingSenderId: "271896394450",
  
    appId: "1:271896394450:web:1f8665655bf310a8c10b0b",
  
    measurementId: "G-3Y9YL563NW"
  
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };