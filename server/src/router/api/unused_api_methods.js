import fs from "fs";
import axios from "axios";
import { MovieFull } from "./models/movieFull"
import { MovieShort } from "./models/MovieShort"
import DB from "../../models/Database";

export const makeMovies = async (req, res, next) => {
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
          let url = `http://www.omdbapi.com/?t=${movie.title.split(" ").join("+")}&y=${movie.year}&plot=full&apikey=${process.env.OM_DB_API_KEY_11}`;
          axios(url)
            .then((result) => {
              let movieFull = result.data;
              if (movieFull.hasOwnProperty("Title") && movieFull.Poster.length > 5) {
                console.count("added: ")
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
              console.count("all: ")
            }).catch(() => {
            })
        }, i);
      })(movie, i)
    }
  }).then(() => {
    res.send(`done`);
  });
}

export const makeTrailers = async (req, res, next) => {
  new Promise((resolve, reject) => {
    new DB().getMany({
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
          let url = `https://api.themoviedb.org/3/movie/${movie.imdbID}/videos?api_key=${process.env.THE_MOVIE_DB_API}&language=en-US`;
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
            }).catch(() => {
            })
        }, i);
      })(movie, i)
    }
  }).then(() => {
    res.send(`done`);
  });
}