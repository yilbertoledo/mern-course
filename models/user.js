const mongoose = require("mongoose");
const {
    Schema
} = mongoose; //Importar clase Schema desde el módulo mongoose

//Definir el nuevo esquema de datos
const userSchema = new Schema({
    googleId: String
});

//Crear el modelo (collection). Solo se crea en caso de que no exista
mongoose.model('users', userSchema);

console.log("User model loaded");