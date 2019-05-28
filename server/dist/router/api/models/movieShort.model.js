"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieShort = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movieSchema = _mongoose.default.Schema({
  "Title": {
    type: String
  },
  "Year": {
    type: String
  },
  "Released": {
    type: String
  },
  "Genre": {
    type: String
  },
  "Country": {
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
    default: 'NaN'
  }
}, {
  collection: 'movies-short',
  additionalProperties: false
});

var MovieShort = _mongoose.default.model('MovieShort', movieSchema); // Including the Excluded Field
// SCHEMA.find().select("+password")


exports.MovieShort = MovieShort;