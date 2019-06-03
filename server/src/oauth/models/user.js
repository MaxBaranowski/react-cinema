import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String
    },
    type: {
      type: String
    },
    id: {
      type: String,
      unique: true
    }
  },
  {
    collection: "users"
  }
);

export const User = mongoose.model("User", userSchema);
