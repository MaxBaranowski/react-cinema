import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    "Title": {
      type: String,
    },
    "Year": {
      type: String,
    },
    "Released": {
      type: String,
    },
    "Genre": {
      type: String,
    },
    "Country": {
      type: String,
    },
    "Poster": {
      type: String,
    },
    "Ratings": {
      "Source": {
        type: String,
      },
      "Value": {
        type: String,
      }
    },
    "imdbID": {
      type: String,
    },
    "Type": {
      type: String,
    },
  },
  {
    collection: 'movies-short',
    additionalProperties: false
  }
);

export const MovieShort = mongoose.model('MovieShort', movieSchema);

// Including the Excluded Field
// SCHEMA.find().select("+password")