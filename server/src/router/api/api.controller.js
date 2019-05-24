import DB from "../../models/Database";
import MoviePoster from "../../models/moviePoster";
import { MovieFull } from "./models/movieFull.model";
import { MovieShort } from "./models/MovieShort.model";

import {
  makeMovies,
  makeTrailers,
  makeUnixDate
} from "./api_db_creted_methods";

export default class API {
  constructor() {}

  getMovie = async (req, res, next) => {
    try {
      const { id: movieId = "" } =
        Object.keys(req.body).length > 0 ? req.body : req.params;

      await new DB()
        .getOne({
          schema: MovieFull,
          condition: {
            key: "imdbID",
            value: movieId
          }
        })
        .then(result => {
          result ? res.status(200).json(result) : res.status(200).json({});
        })
        .catch(err => {
          return next(err);
        });
    } catch (err) {
      return next(err);
    }
  };

  getMoviesByName = async (req, res, next) => {
    try {
      const { name = "", key = "Title", limit = 5 } =
        Object.keys(req.body).length > 0 ? req.body : req.params;
      await new DB()
        .getSome({
          schema: MovieShort,
          condition: {
            key: key,
            value: name
          },
          limit: parseInt(limit)
        })
        .then(result => {
          result ? res.status(200).json(result) : res.status(200).json({});
        })
        .catch(err => {
          return next(err);
        });
    } catch (err) {
      return next(err);
    }
  };

  getMovies = async (req, res, next) => {
    try {
      const {
        limit = 50,
        sortBy = "ReleasedUnix",
        order = order === "asc" ? 0 : -1,
        skip = 0
      } = Object.keys(req.body).length > 0 ? req.body : req.query;
      await new DB()
        .getMany({
          schema: MovieShort,
          limit: parseInt(limit),
          sortBy: sortBy,
          order: order,
          skip: skip
        })
        .then(result => {
          result ? res.status(200).json(result) : res.status(200).json({});
        })
        .catch(err => {
          return next(err);
        });
    } catch (err) {
      return next(err);
    }
  };

  removeMovie = async (req, res, next) => {
    try {
      const { key = "imdbID", id = false } =
        Object.keys(req.body).length > 0 ? req.body : req.params;
      await new DB()
        .remove({
          schema: MovieFull,
          condition: {
            key: key,
            value: id
          }
        })
        .then(
          await new DB().remove({
            schema: MovieShort,
            condition: {
              key: key,
              value: id
            }
          })
        )
        .then(result => {
          res.status(200).json({
            result: `Movie successfully deleted.`
          });
        })
        .catch(err => {
          return next(err);
        });
    } catch (err) {
      return next(err);
    }
  };

  getMoviePoster = async (req, res, next) => {
    try {
      const { id } = Object.keys(req.body).length > 0 ? req.body : req.params;
      await new MoviePoster({ id: id })
        .get()
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          res.status(200).json([]); // there is no such movie
          // throw new Error(err);
        });
    } catch (error) {
      next(error);
    }
  };

  index = (req, res, next) => {
    res.status(200).render("api");
  };

  fillDataBaseWithMovies = async (req, res, next) => {
    try {
      makeMovies(req, res, next)
        .then(result => {
          return result;
        })
        .catch(err => {
          throw new Error(err);
        });
    } catch (err) {
      throw new Error(err);
    }
  };

  fillMoviesWithTrailers = async (req, res, next) => {
    try {
      makeTrailers(req, res, next)
        .then(result => {
          return result;
        })
        .catch(err => {
          throw new Error(err);
        });
    } catch (err) {
      throw new Error(err);
    }
  };

  fillMoviesWithUnixDate = async (req, res, next) => {
    try {
      makeUnixDate(req, res, next)
        .then(result => {
          return result;
        })
        .catch(err => {
          throw new Error(err);
        });
    } catch (err) {
      throw new Error(err);
    }
  };
}
