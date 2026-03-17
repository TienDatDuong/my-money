import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from "firebase/auth";

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGq6xreNunPK-qaOMOkFwLcpmg2Q1xmDM",
    authDomain: "my-money-2026.firebaseapp.com",
    databaseURL: "https://my-money-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-money-2026",
    storageBucket: "my-money-2026.firebasestorage.app",
    messagingSenderId: "38550990177",
    appId: "1:38550990177:web:d2ee786780376613702920",
    measurementId: "G-0ZJ8SH7XKZ"
};

const app = initializeApp(firebaseConfig);

const firebasestorage = getFirestore(app)
const firebaseauth = getAuth(app);
//const timestamp = getFirestore(app).FieldValue.serverTimestamp

export { firebasestorage, firebaseauth }
