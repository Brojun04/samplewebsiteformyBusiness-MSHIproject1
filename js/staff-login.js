import { auth } from "./firebase.js";
import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    message.textContent = "";

    try {
        await signInWithEmailAndPassword(auth, email, password);
        message.style.color = "green";
        message.textContent = "Login successful...";
        window.location.href = "/dashboard.html"; // ✅ ayos na
    } catch (error) {
        message.style.color = "red";
        message.textContent = error.message;
    }
});