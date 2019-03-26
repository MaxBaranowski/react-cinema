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

  getMoviesByName = async (req, res, next) => {
    try {
      const {
        name: movieName = "",
      } = req.body;

      let db = new MoviesDB();
      // console.log(0)
      await db.connect()
        .then(
          () => {
            Customer.find({})
              .limit(2)
              .exec()
              .then((data) => {
                return res.send(data);
              }).catch((err) => {
                return next(err);
              }).finally(
                () => db.disconnect()
              );
          }
          // return db.getSomeByName({
          //   "name": "name.first",
          //   "value": movieName
          // });
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
