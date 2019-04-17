import fs from "fs";
import axios from "axios";
import { MovieFull } from "./models/movieFull"
import { MovieShort } from "./models/MovieShort"
import DB from "../../models/Database";

export const makeMovies = async (req, res, next) => {
  return true;
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
                new DB().fillCollectionMovies({ "schema": MovieShort, "data": movieFull }).then(
                  (result) => {
                  }
                ).catch((err) => {
                  // next(err);
                  console.log(err.message)
                });

                new DB().fillCollectionMovies({ "schema": MovieFull, "data": movieFull }).then(
                  (result) => {
                  }
                ).catch((err) => {
                  console.log(err.message)

                  // next(err);
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
  try {
    // new Promise((resolve, reject) => {
    let promises = [];
    return await new DB().getMany({
      "schema": MovieShort,
      "limit": 0,
    }).then((data) => {
      let amount = data.length;
      let i = 0;
      data.forEach((movie) => {
        promises.push(
          new Promise((resolve, reject) => {
            i += 300;
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
                  return filteredData;
                }).then((data => {
                  console.count(amount)
                  new DB().fillCollectionTrailers({ "schema": MovieFull, "data": data, "movieID": movie.imdbID })
                    .then(
                      (result) => {
                        resolve(result);
                      }
                    ).catch((err) => {
                      reject(err);
                    });
                })).catch((err) => {
                  reject(err)
                })
            }, i);
          })
        );
      });

    }).then(async () => {
      await Promise.all(promises);
      res.send("done")
    }).catch((err) => {
      return next(err);
    })
  } catch (err) {
    return next(err);
  }
};

export const makeUnixDate = async (req, res, next) => {
  let promises = [];
  let l = 0;
  return await new DB().getMany({
    "schema": MovieShort,
    "limit": 0,
    "sortBy": "_id",
    "skip": l
  }).then((data) => {
    let amount = data.length;
    data.forEach((movie) => {
      console.count(amount)
      promises.push(
        new Promise((resolve, reject) => {
          new DB().fillCollectionUnixDate({ "schema": MovieFull, "movieID": movie.imdbID })
            .then(
              (result) => {
                resolve(result);
              }
            ).catch((err) => {
              reject(err);
            })
        })/*,
        new Promise((resolve, reject) => {
          new DB().fillCollectionUnixDate({ "schema": MovieShort, "movieID": movie.imdbID })
            .then(
              (result) => {
                resolve(result);
              }
            ).catch((err) => {
              reject(err);
            })
        })*/
      );
    });

  }).then(async () => {
    await Promise.all(promises);
    res.send("done")
  }).catch((err) => {
    return next(err);
  })

};