
/*
    This is the firebase config file
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBezv2E_NWNMg35fVQ7bFpuFmSoLvidqPU",
    authDomain: "fir-react-dbz.firebaseapp.com",
    projectId: "fir-react-dbz",
    storageBucket: "fir-react-dbz.appspot.com",
    messagingSenderId: "619487947497",
    appId: "1:619487947497:web:38971549211423944f1e78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase database
export const db = getFirestore(app); //getFirestore is the Firestore Database

//export default db;