import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import { User } from "./models/user.model";

passport.use(
  new GoogleStrategy(
    {
      // options
      clientID: `158973815180-e5d8ffba8cbq7mld63iodlh2mpi1tdki.apps.googleusercontent.com`,
      clientSecret: `K62MAbbhYPd_Rr4l747O0m11`,
      callbackURL: `/api/auth/redirect`
    },
    (accesToken, refreshToken, profile, done) => {
      new User({
        username: profile.displayName,
        type: "Google",
        id: profile.id
      })
        .save()
        .then(user => console.log(user));
    }
  )
);
