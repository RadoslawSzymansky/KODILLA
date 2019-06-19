const passport = require('passport');
const config = require('./config');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function passportConfig(app) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.CALLBACK_URL
  },
    function (accessToken, refreshToken, profile, cb) {
      googleProfile = {
        id: profile.id,
        displayName: profile.displayName
      };
      cb(null, profile);
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/logged',
      failureRedirect: '/'
  }));
};

module.exports = passportConfig;