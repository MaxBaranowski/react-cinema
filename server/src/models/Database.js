import DB from "./DB";

export default class Database extends DB {
  constructor(props) {
    super(props);
  }

  getOne = async ({ schema, condition = {} }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .findOne({
              [condition.key]: condition.value
            })
            .exec() //will return a promise if no callback is provided.
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              () => this.disconnect()
            )
        );
    } catch (err) {
      throw new Error(err);
    }
  };

  getSomeByName = async ({ schema, condition = {}, limit = 5 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .find()
            .where({
              [condition.key]: { $regex: ".*^" + condition.value + ".*" }
            })
            .limit(limit)
            .exec()
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              () => this.disconnect()
            )
        );
    } catch (err) {
      throw new Error(err);
    }
  };

  getMany = async ({ schema, limit = 50, sortBy = "ReleasedUnix", order = -1 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .find()
            .sort({
              [sortBy]: order
            })
            .limit(limit)
            .exec()
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              () => this.disconnect()
            )
        );
    } catch (err) {
      throw new Error(err);
    }
  };

  removeMovie = async ({ schema, condition }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .deleteOne({
              [condition.key]: condition.value
            })
            .limit(1)
            .exec()
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              () => this.disconnect()
            )
        );
    } catch (err) {
      throw new Error(err);
    }
  };

  updateMovies = async ({ schema, condition = {} }) => {
    return true;
    try {
      let promises = [];

      return await this.connect()
        .then(() =>
          schema
            //.update({}, { '$set': { 'ReleasedUnix': "NaN" } }, { multi: true })
            .find({})
            .limit()
            .exec()
            .then((movies) => {
              let iter = 1;
              let allMovies = movies.length;

              movies.forEach(function (movie) {
                iter += 1;
                promises.push(
                  new Promise((resolve, reject) => {
                    let dateUnix = Math.floor(new Date(`${movie.Released} GMT`).getTime() / 1000).toString(16);
                    console.log("[ " + iter + " / " + allMovies + " ]")
                    schema.findOne({ "imdbID": movie.imdbID })
                      .exec()
                      .then((data) => {
                        data.ReleasedUnix = dateUnix;
                        data.save(function (err) {
                          if (err) {
                            reject(err);
                          }
                          resolve();
                        })
                      }).catch((err) => {
                        throw new Error(err);
                      });
                  })
                );
              });
            })
        ).catch((err) => {
          throw new Error(err);
        }).then(async () => {
          await Promise.all(promises);
          this.disconnect();
          return "updateMovies completed";
        })
    } catch (err) {
      throw new Error(err);
    }
  };

  updateMoviesTest = async ({ schema, condition = {} }) => {
    return true;
    try {
      let promises = [];

      return await this.connect()
        .then(() =>
          schema
            // .updateMany({}, { '$set': { 'Trailers': [] } }, { multi: true })
            .find(
              { Trailers: { $exists: true }, $where: 'this.Trailers.length <= 0' }
            )
            .limit()
            .exec()
            .then((movies) => {
              let iter = 0;
              let allMovies = movies.length;
              var a = 0;
              var b = 40;
              console.log(allMovies)
              setInterval(() => {
                let movies2 = movies.slice(a, b);
                console.count()
                console.log(allMovies, movies2.length, a, b)
                //   a += 40;
                //   b += 40;
                // }, 10300)
                movies2.forEach((movie) => {
                  iter += 1;
                  promises.push(
                    new Promise((resolve, reject) => {
                      // let dateUnix = Math.floor(new Date(`${movie.Released} GMT`).getTime() / 1000).toString(16);
                      // console.log("[ " + iter + " / " + allMovies + " ]")
                      schema.findOne({ "imdbID": movie.imdbID })
                        .exec()
                        .then((movie) => {
                          console.count(allMovies)
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
                              movie.Trailers = filteredData;
                              movie.save(function (err) {
                                if (err) {
                                  reject(err);
                                }

                                resolve();
                              })
                            })

                        }).catch((err) => {
                          throw new Error(err);
                        });
                    })
                  );
                });
                a += 40;
                b += 40;
              }, 10300)
            })
        ).catch((err) => {
          throw new Error(err);
        }).then(async () => {
          await Promise.all(promises);
          // this.disconnect();
          return "updateMovies completed";
        })
    } catch (err) {
      throw new Error(err);
    }
  };

  fillCollection = async ({ schema, data }) => {
    try {
      return await this.connect()
        .then(() => {
          schema
            .create(data)
            // .exec() //will return a promise if no callback is provided.
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              // () => this.disconnect()
            )
        })
    } catch (err) {
      throw new Error(err);
    }
  }

}