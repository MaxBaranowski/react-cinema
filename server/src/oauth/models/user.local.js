import mongoose from "mongoose";
import localPassportMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String
  },
  {
    collection: "users"
  }
);

userSchema.plugin(localPassportMongoose);

export const Account = mongoose.model("Account", userSchema);
