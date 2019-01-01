const express = require("express");
const passport = require("passport");


module.exports = (app) => {
    //Solicitar aprobación del usuario
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    //Ruta donde google OAuth devolverá el token
    app.get("/auth/google/callback", passport.authenticate("google"));

    console.log("auth routes loaded");
}