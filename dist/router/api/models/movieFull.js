"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieFull = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var movieSchema = _mongoose["default"].Schema({
  "Title": {
    type: String
  },
  "Year": {
    type: String
  },
  "Released": {
    type: String
  },
  "Runtime": {
    type: String
  },
  "Genre": {
    type: String
  },
  "Director": {
    type: String
  },
  "Writer": {
    type: String
  },
  "aActors": {
    type: String
  },
  "Plot": {
    type: String
  },
  "Language": {
    type: String
  },
  "Country": {
    type: String
  },
  "Awards": {
    type: String
  },
  "Poster": {
    type: String
  },
  "Ratings": {
    type: [{
      "Source": {
        type: String
      },
      "Value": {
        type: String
      }
    }]
  },
  "imdbRating": {
    type: String
  },
  "imdbVotes": {
    type: String
  },
  "imdbID": {
    type: String,
    required: true,
    unique: true
  },
  "Type": {
    type: String
  },
  "ReleasedUnix": {
    type: String,
    "default": 'NaN'
  },
  "Trailers": {
    type: [{}]
  }
}, {
  collection: 'movies-full',
  additionalProperties: false
});

var MovieFull = _mongoose["default"].model('MovieFull', movieSchema); // Including the Excluded Field
// SCHEMA.find().select("+password")


exports.MovieFull = MovieFull;