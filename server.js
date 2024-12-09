const express = require("express");
const app = express();

// Роут для перенаправления
app.get("/redirect", (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send("URL parameter is missing");
  }

  // Перенаправляем на указанный URL
  res.redirect(decodeURIComponent(targetUrl));
});

// Запуск сервера (локально)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
