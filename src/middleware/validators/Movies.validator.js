import Joi from "@hapi/joi";

const validation = (req, res, next, schema) => {
  const params = Object.assign(req.query, req.body, req.params);
  Joi.validate(params, schema)
    .then(result => {
      //console.log(result);
      next();
    })
    .catch(err => next(err));
};

/* Validation schemas */
const MoviesSchema = {
  limit: Joi.number()
    .integer()
    .min(1)
    .max(50),
  sortBy: Joi.string(),
  order: Joi.string(),
  skip: Joi.number()
    .integer()
    .min(1)
    .max(50)
};

const MovieSchema = {
  id: Joi.string()
    .alphanum()
    .required()
};

const MoviesNameSchema = {
  name: Joi.string()
    // .alphanum()
    .required(),
  key: Joi.string()
    .alphanum()
    .min(1)
    .max(50),
  limit: Joi.number()
    .integer()
    .min(1)
    .max(50)
};

export const validateMovies = (...args) => validation(...args, MoviesSchema);
export const validateMovie = (...args) => validation(...args, MovieSchema);
export const validateMoviesName = (...args) =>
  validation(...args, MoviesNameSchema);
