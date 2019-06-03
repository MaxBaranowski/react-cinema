import passport from "passport";
import LocalStrategy from "passport-local";

import { Account } from "./models/user.local";

import Db from "../models/Database";

// serializeUser determines which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
passport.serializeUser((user, done) => {
  console.log(11, user);
  done(null, user._id); //user id  is saved in the session
});

// get the whole object from sseesion by id
passport.deserializeUser((id, done) => {
  console.log(12, id);
  Account.findById(id).then(user => {
    console.log(3, user);
    done(null, user); // object is attached to the request object as req.user
  });
});

passport.use(
  new LocalStrategy(
    { username: "email", password: "user-password" },
    async function(username, password, done) {
      console.log(username);
      console.log(password);

      await new Db()
        .getOne({
          schema: Account,
          condition: { key: "username", value: username }
        })
        .then(user => {
          console.log(20);
          if (!user) {
            console.log(30);
            return done(null, false);
          }
          console.log(40, user);
          done(null, user);
        })
        .catch(err => console.log(err));
      console.log(50);
    }
  )
);


