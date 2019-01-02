const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require('./services/passport');

mongoose.connect(keys.mongoDbUri, {
  useNewUrlParser: true //este parámetro adicional (y opcional) es enviado para evitar la advertencia de obsoleto
});


//Inicializar express
const app = express();
//Invocar al arhivo de auenticación pasando como argumento la variable de express
require("./routes/authRoutes")(app);
//Alternativamente se puede invocar en dos pasos => const authRoutes = require("./routes/authRoutes"); authRoutes(app);

//Cargar el puerto de forma dinámica (para Heroku) o estática (desarrollo)
const PORT = process.env.PORT || 5000;
app.listen(PORT);