// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc }
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAErvZr4lquikWVYTFStWv28oXo0SQ-iv0",
  authDomain: "journey-146e9.firebaseapp.com",
  projectId: "journey-146e9",
  storageBucket: "journey-146e9.firebasestorage.app",
  messagingSenderId: "103571329553",
  appId: "1:103571329553:web:87d6a90548f6ddd98157b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

// apiKey: "AIzaSyAErvZr4lquikWVYTFStWv28oXo0SQ-iv0",
// authDomain: "journey-146e9.firebaseapp.com",
// projectId: "journey-146e9",
// storageBucket: "journey-146e9.firebasestorage.app",
// messagingSenderId: "103571329553",
// appId: "1:103571329553:web:87d6a90548f6ddd98157b0"
