module.exports = function (app) {
    app.get("/", function (req, res) {
        res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Telegram Bot</title>
  </head>
  <body>
    <h1>Welcome to my first test Telegram bot</h1>
    <p>Send "Marco" to your bot to get a response.</p>
  </body>
</html>`)
    })
}