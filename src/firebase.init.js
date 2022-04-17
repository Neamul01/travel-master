import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu6kr0p32LVsMW4Sp0tFgGBPon5ZNeXB4",
    authDomain: "travel-master-f37ad.firebaseapp.com",
    projectId: "travel-master-f37ad",
    storageBucket: "travel-master-f37ad.appspot.com",
    messagingSenderId: "445291148815",
    appId: "1:445291148815:web:dc9888ace5cc135827557a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;