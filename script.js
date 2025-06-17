import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("order-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const item = form.item.value.trim();
  const from = form.from.value.trim();
  const to = form.to.value.trim();
  const time = form.time.value.trim();
  const type = form.type.value;

  if (!name || !item || !from || !to || !time || !type) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  try {
    await addDoc(collection(db, "orders"), {
      name,
      item,
      from,
      to,
      time,
      type,
      status: "в процессе",       // по умолчанию
      createdAt: serverTimestamp(),
      courierId: null             // можно будет назначить позже
    });

    alert("Заказ успешно оформлен!");
    form.reset();
  } catch (error) {
    console.error("Ошибка при отправке заказа:", error);
    alert("Ошибка при оформлении заказа. Попробуйте позже.");
  }
});
