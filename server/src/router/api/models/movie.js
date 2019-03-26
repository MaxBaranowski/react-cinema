import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  nat: String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  images: {
    large: String,
    medium: String,
    thumbnail: String,
  },
},
  { collection: 'users-basic' }
);

export const Customer = mongoose.model('Customer', customerSchema);