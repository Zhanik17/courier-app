// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config — уже используется в твоём проекте
const firebaseConfig = {
  apiKey: "AIzaSyC2le-5_lHwyqzujn3WsRsDZrBf-Rab-5c",
  authDomain: "courierapp-99ddb.firebaseapp.com",
  projectId: "courierapp-99ddb",
  storageBucket: "courierapp-99ddb.appspot.com",
  messagingSenderId: "474302757465",
  appId: "1:474302757465:web:26c43df7fe8f8c122a0f48"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Обработчик формы входа
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Перенаправление после успешного входа
    window.location.href = "map.html";
  } catch (error) {
    errorMessage.textContent = "Ошибка входа: " + error.message;
  }
});
