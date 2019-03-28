import DB from "../../models/Database";
import { MovieFull } from "./models/movieFull"
import { MovieShort } from "./models/MovieShort"

import fs from "fs";
import axios from "axios";

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

      await new DB().findByParams({ "schema": Customer, "findKey": "name.first", "findValue": movieName }).then(
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


  getData = async (req, res, next) => {
    let data3 = [];

    let time = new Date();
    new Promise((resolve, reject) => {
      fs.readFile('./movies.json', (err, data) => {
        if (err) reject(err);
        let filtredDate = [];
        for (var movie of JSON.parse(data)) {
          if (Number(movie["year"]) >= 1979) {
            filtredDate.push(movie)
          }
        }
        resolve(filtredDate);
      });
    }).then((data) => {
      let i = 100;
      for (let movie of data.slice(4005, 4500)) {
        i += 100;
        (function (movie, i) {
          setTimeout(function () {
            //1 key: e5c95e8c
            //2 key: 435a86bf
            //3 key: BanMePlz 
            let url = `http://www.omdbapi.com/?t=${movie.title.split(" ").join("+")}&y=${movie.year}&plot=full&apikey=435a86bf`;
            axios(url)
              .then((result) => {
                let movieFull = result.data;
                if (movieFull.hasOwnProperty("Title") && movieFull.Poster.length > 5) {
                  new DB().fillCollection({ "schema": MovieShort, "data": movieFull }).then(
                    (result) => {
                    }
                  ).catch((err) => {
                  });

                  new DB().fillCollection({ "schema": MovieFull, "data": movieFull }).then(
                    (result) => {
                    }
                  ).catch((err) => {
                  });
                }
                console.count()
              }).catch(() => { })
          }, i);
        })(movie, i)

      }
    }).then(() => {
      function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      res.send(`done, time: ${millisToMinutesAndSeconds(new Date() - time)}ms`);
    });
  };


  index = (req, res, next) => {
    res.status(200).render("api");
  }

}
