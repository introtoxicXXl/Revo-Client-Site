// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdys5717v-eMfimiy01jFfL58xUvzghP4",
    authDomain: "rivo-4fde7.firebaseapp.com",
    projectId: "rivo-4fde7",
    storageBucket: "rivo-4fde7.appspot.com",
    messagingSenderId: "352438246459",
    appId: "1:352438246459:web:5483e32116642e88d5101e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
