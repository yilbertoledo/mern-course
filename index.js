const express = require("express");
require('./services/passport');


//Inicializar express
const app = express();
//Invocar al arhivo de auenticación pasando como argumento la variable de express
require("./routes/authRoutes")(app);
//Alternativamente se puede invocar en dos pasos => const authRoutes = require("./routes/authRoutes"); authRoutes(app);

//Cargar el puerto de forma dinámi ca (para Heroku) o estática (desarrollo)
const PORT = process.env.PORT || 5000;
app.listen(PORT);