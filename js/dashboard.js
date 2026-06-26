import { auth } from "./firebase.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

console.log("dashboard.js loaded");

onAuthStateChanged(auth, (user) => {
    console.log("Auth state:", user);
    if (!user) {
        window.location.href = "../staff-login.html";
    }
});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
        try {
            await signOut(auth);
            window.location.href = "../staff-login.html";
        } catch (error) {
            console.error("Sign out error:", error);
        }
    });
}