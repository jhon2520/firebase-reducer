
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj2iZg2b6h3Nx5wZ8Ts1OeM0RA_v4IG5s",
    authDomain: "basic-login-49c03.firebaseapp.com",
    projectId: "basic-login-49c03",
    storageBucket: "basic-login-49c03.appspot.com",
    messagingSenderId: "355463345056",
    appId: "1:355463345056:web:c45ba7be3198717b022ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}