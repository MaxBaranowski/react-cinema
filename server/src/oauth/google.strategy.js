import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import { User } from "./models/user.model";

// serializeUser determines which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
passport.serializeUser((user, done) => {
  console.log(1, user);
  done(null, user._id); //user id  is saved in the session
});

// get the whole object from sseesion by id
passport.deserializeUser((id, done) => {
  console.log(2, id);
  User.findById(id).then(user => {
    console.log(3, user);
    done(null, user); // object is attached to the request object as req.user
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options
      clientID: `158973815180-e5d8ffba8cbq7mld63iodlh2mpi1tdki.apps.googleusercontent.com`,
      clientSecret: `K62MAbbhYPd_Rr4l747O0m11`,
      callbackURL: `/api/auth/redirect`
    },
    (accesToken, refreshToken, profile, done) => {
      // check for user existing
      User.findOne({ id: profile.id }).then(user => {
        if (user) {
          done(null, user); //create new user
        } else {
          new User({
            username: profile.displayName,
            type: "Google",
            id: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
