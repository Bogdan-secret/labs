import {initializeApp} from 'firebase/app';
import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';
import {ref, push, get, set} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCmOuYxrax56zOmwSyfbNndz2ESFJDObgg",
    authDomain: "expenses-8debd.firebaseapp.com",
    projectId: "expenses-8debd",
    storageBucket: "expenses-8debd.firebasestorage.app",
    messagingSenderId: "750448706264",
    appId: "1:750448706264:web:ee9a4f0be68a85fbca0dad",
    measurementId: "G-BGSPMSD12N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, ref, push, get, set,  collection, addDoc, getDocs};
