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
        id: movieId = "",
      } = req.body;

      await new DB().findOne({
        "schema": MovieFull,
        "condition": {
          "key": "imdbID",
          "value": movieId
        }
      }).then(
        (result) => {
          res.json(result)
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
      } = req.body;

      await new DB().findByName({
        "schema": MovieShort,
        "findKey": "name.first",
        "findValue": movieName
      }).then(
        (result) => {
          res.json(result)
        }
      ).catch((err) => {
        return next(err);
      });

    } catch (err) {
      return next(err);
    }
  }

  getMovies = async (req, res, next) => {
    try {
      await new DB().getMovies({
        "schema": MovieShort,
        "limit": 24,
      }).then(
        (result) => {
          res.json(result)
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
          res.send(result);
        }
      ).catch((err) => {
        return next(err);
      });
    } catch (err) {
      return next(err);
    }
  }

  removeMovies = async (req, res, next) => {
    try {
      await new DB().removeMovies({
        "schema": MovieFull,
        "condition": {
          "key": "Released",
          "value": "N/A"
        }
      }).then(
        (result) => {
          res.send("removed")
        }
      ).catch((err) => {
        return next(err);
      });
    } catch (err) {
      return next(err);
    }
  }

  getData = async (req, res, next) => {
    return res.send("nothing :)")
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
      for (let movie of data.slice(9000, 10000)) {//9337
        i += 100;
        (function (movie, i) {
          setTimeout(function () {
            //1 key: e5c95e8c
            //2 key: 435a86bf
            //3 key: BanMePlz 

            // 4 key: 9b04b98a 
            // 5 key: f340eea8
            // 6 key: c422e09d 
            // 7 key: c2bec5b0 
            // 8 key: dc91d052
            // 9 key: ca19648a 
            //10 key: 5cc02342
            //11 key: 3ba53364 
            //12 key: 2af00014
            //13 key: 8b603b0b 
            let url = `http://www.omdbapi.com/?t=${movie.title.split(" ").join("+")}&y=${movie.year}&plot=full&apikey=8b603b0b`;
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
      res.send(`done`);
    });
  }

  makeTrailers = async (req, res, next) => {
    return true;
    new Promise((resolve, reject) => {
      new DB().getMovies({
        "schema": MovieShort,
        // "limit": 2,
      }).then((filtredDate) => {
        resolve(filtredDate);
      })
    }).then((data) => {
      let i = 100;
      for (let movie of data) {//9337
        i += 300;
        (function (movie, i) {
          setTimeout(function () {
            let url = `https://api.themoviedb.org/3/movie/${movie.imdbID}/videos?api_key=0b755d63d19547e7a336ade03c48ba23&language=en-US`;
            axios(url)
              .then((result) => {
                let data = result.data.results;
                let filteredData = [];
                for (let key of data) {
                  filteredData.push({
                    "name": key.name,
                    "url": key.key,
                    "site": key.site,
                  })

                }
                // console.log(filteredData)
                new DB().fillCollection({ "schema": MovieFull, "data": filteredData }).then(
                  (result) => {
                  }
                ).catch((err) => {
                });
                console.count()
              }).catch(() => { })
          }, i);
        })(movie, i)
      }
    }).then(() => {
      res.send(`done`);
    });
  }


  index = (req, res, next) => {
    res.status(200).render("api");
  }

}
