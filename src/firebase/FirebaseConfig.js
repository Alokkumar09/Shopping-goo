// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD39R0wH_FdThf9esOttso9h3CCQjceM5k",
  authDomain: "shoppinggo-34657.firebaseapp.com",
  projectId: "shoppinggo-34657",
  storageBucket: "shoppinggo-34657.appspot.com",
  messagingSenderId: "249583127072",
  appId: "1:249583127072:web:e631865ea0f272acf60a45"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB =getFirestore(app);
const auth=getAuth(app)
export {fireDB,auth}