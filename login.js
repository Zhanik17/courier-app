import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html"; // Переход после входа
    })
    .catch((error) => {
      document.getElementById("error-message").innerText = "Ошибка: " + error.message;
    });
});
