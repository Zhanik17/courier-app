// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2le-5_lHwyqzujn3WsRsDZrBf-Rab-5c",
  authDomain: "courierapp-99ddb.firebaseapp.com",
  projectId: "courierapp-99ddb",
  storageBucket: "courierapp-99ddb.appspot.com",
  messagingSenderId: "474302757465",
  appId: "1:474302757465:web:26c43df7fe8f8c122a0f48",
  databaseURL: "https://courierapp-99ddb-default-rtdb.firebaseio.com",
  measurementId: "G-X58GS7WDHG"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);          // Realtime Database
const auth = getAuth(app);            // Аутентификация
const firestore = getFirestore(app);  // Firestore (если нужно позже)

export { app, db, auth, firestore };
