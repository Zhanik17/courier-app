<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Вход для курьеров</title>
  <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"></script>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 30px; }
    .login-box { background: #fff; padding: 20px 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); max-width: 400px; margin: auto; }
    h2 { text-align: center; }
    input { width: 100%; padding: 10px; margin-top: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 6px; }
    button { width: 100%; padding: 10px; background-color: #007bff; color: #fff; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; }
    button:hover { background-color: #0056b3; }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Вход для курьеров</h2>
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Пароль">
    <button onclick="login()">Войти</button>
  </div>

  <script>
    // Конфигурация Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyD2fGiGUlv-D2_W04WRrxAFe34rNzB1FVU",
      authDomain: "courier-app-bcf64.firebaseapp.com",
      projectId: "courier-app-bcf64",
      storageBucket: "courier-app-bcf64.appspot.com",
      messagingSenderId: "328029865365",
      appId: "1:328029865365:web:8c9cd999a9b49d7cfb2d21"
    };
    firebase.initializeApp(firebaseConfig);

    // Функция входа с сохранением сессии
    function login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .then(() => {
          window.location.href = "courier.html";
        })
        .catch(error => {
          alert("Ошибка: " + error.message);
        });
    }
  </script>
</body>
</html>
