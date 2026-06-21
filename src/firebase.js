import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQuDq3OIkzpG1Z8jelnoevivLCKPUw_oY",
  authDomain: "trigger-distributor.firebaseapp.com",
  projectId: "trigger-distributor",
  storageBucket: "trigger-distributor.firebasestorage.app",
  messagingSenderId: "904956877023",
  appId: "1:904956877023:web:8370f1bb547baf9699716a",
  measurementId: "G-NCNKPF32YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
