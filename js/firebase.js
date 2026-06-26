import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmLBOdC9PiIBdxWw9utbZ-iBL2drQ2sTI",
  authDomain: "mustard-seed-church.firebaseapp.com",
  projectId: "mustard-seed-church",
  storageBucket: "mustard-seed-church.firebasestorage.app",
  messagingSenderId: "794359519512",
  appId: "1:794359519512:web:05a580081530340fd7666d",
  measurementId: "G-R7M1MHDXW4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);