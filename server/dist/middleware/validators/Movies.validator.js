"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMoviesName = exports.validateMovie = exports.validateMovies = void 0;

var _Joi = _interopRequireDefault(require("Joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation(req, res, next, schema) {
  var params = Object.assign(req.query, req.body, req.params);

  _Joi.default.validate(params, schema).then(function (result) {
    //console.log(result);
    next();
  }).catch(function (err) {
    return next(err);
  });
};
/* Validation schemas */


var MoviesSchema = {
  limit: _Joi.default.number().integer().min(1).max(50),
  sortBy: _Joi.default.string(),
  order: _Joi.default.string(),
  skip: _Joi.default.number().integer().min(1).max(50)
};
var MovieSchema = {
  id: _Joi.default.string().alphanum().required()
};
var MoviesNameSchema = {
  name: _Joi.default.string().alphanum().required(),
  key: _Joi.default.string().alphanum().min(1).max(50),
  limit: _Joi.default.number().integer().min(1).max(50)
};

var validateMovies = function validateMovies() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return validation.apply(void 0, args.concat([MoviesSchema]));
};

exports.validateMovies = validateMovies;

var validateMovie = function validateMovie() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return validation.apply(void 0, args.concat([MovieSchema]));
};

exports.validateMovie = validateMovie;

var validateMoviesName = function validateMoviesName() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return validation.apply(void 0, args.concat([MoviesNameSchema]));
};

exports.validateMoviesName = validateMoviesName;