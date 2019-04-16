import DB from "../../models/Database";
import { MovieFull } from "./models/movieFull"
import { MovieShort } from "./models/MovieShort"

export default class API {
  constructor() {
  }

  getMovie = async (req, res, next) => {
    try {
      const {
        id: movieId = "",
      } = (Object.keys(req.body).length > 0) ? req.body : req.query;

      await new DB().getOne({
        "schema": MovieFull,
        "condition": {
          "key": "imdbID",
          "value": movieId
        }
      }).then(
        (result) => {
          res.json({ result })
        }
      ).catch((err) => {
        return next(err);
      });

    } catch (err) {
      return next(err);
    }
  }

  getMoviesByName = async (req, res, next) => {
    try {
      const {
        name: movieName = "",
      } = (Object.keys(req.body).length > 0) ? req.body : req.query;

      await new DB().getSomeByName({
        "schema": MovieShort,
        "condition": {
          "key": "name.first",
          "value": movieName
        }
      }).then(
        (result) => {
          res.json({ result })
        }
      ).catch((err) => {
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
        sortBy = null,
        order = null
      } = (Object.keys(req.body).length > 0) ? req.body : req.query;
      await new DB().getMany({
        "schema": MovieShort,
        "limit": parseInt(limit),
        "sortBy": sortBy
      }).then(
        (result) => {
          res.json({ result })
        }
      ).catch((err) => {
        return next(err);
      });
    } catch (err) {
      return next(err);
    }
  }

  updateMovies = async (req, res, next) => {
    try {
      await new DB().updateMovies({
        "schema": MovieFull,
        "condition": {
          "key": "Released",
          "value": "N/A"
        }
      }).then(
        (result) => {
          res.send({ result });
        }
      ).catch((err) => {
        return next(err);
      });
    } catch (err) {
      return next(err);
    }
  }

  removeMovie = async (req, res, next) => {
    try {
      const {
        key = "imdbID",
        value
      } = (Object.keys(req.body).length > 0) ? req.body : req.query;

      await new DB().removeMovie({
        "schema": MovieFull,
        "condition": {
          "key": key,
          "value": value
        }
      }).then(
        await new DB().removeMovie({
          "schema": MovieShort,
          "condition": {
            "key": key,
            "value": value
          }
        })
      ).then(
        (result) => {
          res.status(200).json({
            "result": `Movie with ${key}: ${value} successfully deleted.`
          })
        }
      ).catch((err) => {
        return next(err);
      });
    } catch (err) {
      return next(err);
    }
  }

  index = (req, res, next) => {
    res.status(200).render("api");
  }

}
