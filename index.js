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

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
