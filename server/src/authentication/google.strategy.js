import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      // options
      clientID: `158973815180-e5d8ffba8cbq7mld63iodlh2mpi1tdki.apps.googleusercontent.com`,
      clientSecret: `K62MAbbhYPd_Rr4l747O0m11`,
      callbackURL: `/api/auth/redirect`
    },
    (accesToken, refreshToken, profile, done) => {
      // cb function
      console.log(profile._json);
    }
  )
);
