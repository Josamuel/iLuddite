const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

// const User = require('../../models/users');

module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: '1787582178167706',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallback: true
  },
  (req, accessToken, refreshToken, profile, done) => {
    // let query = {
    //   'facebook.id': profile.id
    // };

    // User.findOne(query, (error, user) => {
    //   if (user) {
    //     console.log('User found');
    //     done(null, user);
    //   } else {
    //     console.log('User not found - adding to DB');
    //
    //     let newUser = {};
    //     newUser.id = profile.id;
    //     newUser.displayName = profile.displayName;
    //     newUser.image = ;
    //     graph.facebook.com/10102043395845447/picture?width=400&height=400
    //     new User(newUser).save();
    //     done(null, user);
    //   }
    // })


    //done(null, user);

  }))
}
