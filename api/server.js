const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirect Page</title>
      </head>
      <body>
        <h1>Redirect Page</h1>
        <p>Please wait while we redirect you to the desired URL.</p>
        <p>If you are not redirected automatically, please click <a href="/redirect?url=${encodeURIComponent(
          "https://example.com"
        )}">here</a>.</p>
      </body>
    </html>
  `);
});
app.get("/redirect", (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("URL parameter is missing");
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting...</title>
        <script type="text/javascript">
          window.location.href = decodeURIComponent("${targetUrl}");
        </script>
      </head>
      <body>
        <p>Redirecting...</p>
      </body>
    </html>
  `);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));