const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            //Se obtuvo el token del usuario
            new User({
                googleId: profile.id
            }).save();

            /*
            console.log(`accessToken: ${accessToken}`);
            console.log(`refreshToken: ${refreshToken}`);
            console.log(`profile: ${profile}`);
            console.log(`done: ${done}`);
            */
        }
    )
);

console.log("passport module initialized");