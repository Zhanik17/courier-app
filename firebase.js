// Подключаем Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Конфигурация Firebase — замени на свои значения, если нужно
const firebaseConfig = {
  apiKey: "AIzaSyC2le-5_lHwyqzujn3WsRsDZrBf-Rab-5c",
  authDomain: "courierapp-99ddb.firebaseapp.com",
  projectId: "courierapp-99ddb",
  storageBucket: "courierapp-99ddb.appspot.com",
  messagingSenderId: "474302757465",
  appId: "1:474302757465:web:26c43df7fe8f8c122a0f48",
  measurementId: "G-X58GS7WDHG"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт базы данных
export const db = getFirestore(app);
