import MoviesDB from "../../models/movies.db.js";
import { Customer } from "../../models/movie"
import { MongoClient, ObjectId } from "mongodb";
export default class API {
  constructor() {
  }

  getMovie = async (req, res, next) => {
    try {
      const {
        id: movieId = "", //5c6178f4b0bba10d976f1220
      } = req.body;

      Customer.findById(
        movieId,
        (err, movie) => {
          if (err) return next(err);
          res.json(movie);
        });

    } catch (err) {
      return next(err);
    }
  };

  getMoviesByName = (req, res) => {
    try {
      const {
        name: movieName = "",
      } = req.body;

      let db = new MoviesDB();
      db.connect()
        .then(
          () => {
            return db.getSomeByName({
              "name": "name.first",
              "value": movieName
            });
          }, err => {
            res.status(500).json({ error: err });
          }
        ).then(
          data => {
            res.status(200).json(data);
          }, err => {
            res.status(500).json({ error: err });
          }
        ).then(
          () => db.disconnect()
        );
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };


  index = (req, res, next) => {
    Customer.find({}, function (err, users) {
      var userMap = {};

      users.forEach(function (user) {
        userMap[user._id] = user;
      });

      res.send(userMap);
    }).limit(2);

    // res.status(200).json({
    //   "body": req.body,
    //   "name": "test",
    //   "time": new Date().toLocaleDateString()
    // });
  }

}
