const express = require("express");
const app = express();

// Пример промежуточного редиректа
app.get("/redirect", (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("URL параметр отсутствует");
  }

  // Генерируем HTML-страницу для редиректа
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${decodeURIComponent(
          targetUrl
        )}" />
      </head>
      <body>
        <p>Перенаправление...</p>
      </body>
    </html>
  `);
});
app.post("/payment/webhook", (req, res) => {
  const { event, object } = req.body;

  if (event === "payment.succeeded") {
    console.log("Платеж успешно завершён:", object);
    // Обновите статус платежа в базе данных
    // Пример: updatePaymentStatus(object.id, "succeeded");
  } else if (event === "payment.canceled") {
    console.log("Платеж отменён:", object);
    // Обновите статус платежа в базе данных
    // Пример: updatePaymentStatus(object.id, "canceled");
  } else {
    console.warn("Получено неизвестное событие:", event);
  }

  res.sendStatus(200); // Подтверждаем успешный приём
});
// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
