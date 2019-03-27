import DB from "../../models/Database";
import {MovieFull} from "./models/movieFull"
import {MovieShort} from "./models/MovieShort"

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
      
      await new DB().findById({"schema": Customer, "id": movieId}).then(
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
      
      await new DB().findByParams({"schema": Customer, "findKey": "name.first", "findValue": movieName}).then(
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
        resolve(JSON.parse(data));
      });
    }).then((data) => {
      // let data2 = data.slice(0, 3);
      let i = 100;
  
      for (let movie of data) {
        i += 300;
        (function(movie,i) {
          setTimeout(function () {
            let url = `http://www.omdbapi.com/?t=${movie.title.split(" ").join("+")}&y=${movie.year}&plot=full&apikey=e5c95e8c`;
            axios(url)
              .then((result) => {
                let movieFull = result.data;
                if (!movieFull.hasOwnProperty("Title")) {
                  return;
                }
                // data3.push(movieFull)
        
                new DB().fillCollection({"schema": MovieShort, "data": movieFull}).then(
                  (result) => {
                  }
                ).catch((err) => {
                  return next(err);
                });
        
                new DB().fillCollection({"schema": MovieFull, "data": movieFull}).then(
                  (result) => {
                  }
                ).catch((err) => {
                  return next(err);
                });
        
        
                return result; // return array with objects
              })
          }, i);
        })(movie,i)
        
      }
    }).then(() => {
      function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
      
      // new DB().fillCollection({"schema": MovieFull, "data": data3}).then(
      //   (result) => {
      //   }
      // ).catch((err) => {
      //   return next(err);
      // });
      // console.log(data3.length)
      res.send(`done, time: ${millisToMinutesAndSeconds(new Date() - time)}ms`);
    });
    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
  };
  
  
  index = (req, res, next) => {
    res.status(200).render("api");
  }
  
}
