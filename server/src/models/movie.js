import mongoose from "mongoose";
// var Order = require('./order.js');

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

customerSchema.methods.getUser = (cb) => {
  return JSON.stringify(this);
};

export const Customer = mongoose.model('Customer', customerSchema);