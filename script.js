import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

const form = document.getElementById("order-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value,
    item: document.getElementById("item").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    time: document.getElementById("time").value,
    type: document.getElementById("type").value,
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "orders"), order);
    alert("Заказ успешно отправлен!");
    form.reset();
  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert("Не удалось отправить заказ.");
  }
});
