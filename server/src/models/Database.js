import DB from "./DB";

export default class Database extends DB {
  constructor(props) {
    super(props);
  }

  findOne = async ({ schema, condition = {} }) => {
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

  findByName = async ({ schema, findKey, findValue, limit = 5 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .find()
            .where({
              [findKey]: { $regex: ".*^" + findValue + ".*" }
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

  getMovies = async ({ schema, limit = 50, sortBy = "ReleasedUnix", order = -1 }) => {
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
  }

  removeMovies = async ({ schema, condition }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .remove({
              [condition.key]: condition.value
            })
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
  }

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
  }

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