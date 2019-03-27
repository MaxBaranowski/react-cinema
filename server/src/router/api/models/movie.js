import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  nat: {
    type: String,
    required: true,
    select: false
  },
  name: {
    title: {
      type: String,
      required: true,
    },
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  images: {
    large: {
      type: String,
      select: false,
      required: true,
    },
    medium: {
      type: String,
      required: true,
      select: false
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
},
  {
    collection: 'users-basic',
    // _id: false,
  }
);

export const Customer = mongoose.model('Customer', customerSchema);

// Including the Excluded Field
// SCHEMA.find().select("+password")