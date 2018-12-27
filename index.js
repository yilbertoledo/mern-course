const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//Cargar el puerto de forma dinámica (para Heroku) o estática (desarrollo)
const PORT = process.env.PORT || 5000;
app.listen(PORT);