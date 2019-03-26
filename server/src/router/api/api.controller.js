import MoviesDB from "../../models/db/DB";
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
      let db = new MoviesDB();
      await db.connect()
        .then(() =>
          Customer.findById(movieId).exec() //will return a promise if no callback is provided.
            .then((data) => {
              return res.json(data);
            }).catch((err) => {
              return next(err);
            }).finally(
              () => db.disconnect()
            )
        );
    } catch (err) {
      return next(err);
    }
  };

  getMoviesByName = async (req, res, next) => {
    try {
      const {
        name: movieName = "ol",
      } = req.body;

      let db = new MoviesDB();
      await db.connect()
        .then(() =>
          Customer.find({
            ["name.first"]: { $regex: ".*^" + movieName + ".*" }
          }).limit(5)
            .exec() //will return a promise if no callback is provided.
            .then((data) => {
              return res.json(data);
            }).catch((err) => {
              return next(err);
            }).finally(
              () => db.disconnect()
            )
        );
    } catch (err) {
      return next(err);
    }
  };


  index = (req, res, next) => {
    // Customer.find({}, function (err, users) {
    //   var userMap = {};

    //   users.forEach(function (user) {
    //     userMap[user._id] = user;
    //   });

    //   res.send(userMap);
    // }).limit(2);

    res.status(200).json({
      "body": req.body,
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }

}
