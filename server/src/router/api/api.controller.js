import DB from "../../models/DB";
import { Customer } from "./models/movie"

export default class API {
  constructor() {
  }

  getMovie = async (req, res, next) => {
    try {
      const {
        id: movieId = "", //5c6178f4b0bba10d976f1220
      } = req.body;

      await new DB().findById({ "schema": Customer, "id": movieId }).then(
        (result) => {
          console.log(result.id)
          res.json(result)
        }
      ).catch((err) => {
        return next(err);
      });

    } catch (err) {
      return next(err);
    }
  };

  getMoviesByName = async (req, res, next) => {
    try {
      const {
        name: movieName = "",
      } = req.body;

      await new DB().findByName({ "schema": Customer, "findKey": "name.first", "findValue": movieName }).then(
        (result) => {
          res.json(result)
        }
      ).catch((err) => {
        return next(err);
      });

    } catch (err) {
      return next(err);
    }
  };


  index = (req, res, next) => {
    res.status(200).json({
      "body": req.body,
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }

}
