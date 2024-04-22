const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy({
    clientID: '1018532335187-slhnf667q3vq9i31epl5b0e4jg692mq5.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:5173'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

app.use(passport.initialize());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
