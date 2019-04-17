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

  getMany = async ({ schema, limit = 50, sortBy = "ReleasedUnix", order = -1, skip = 0 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .find()
            .sort({
              [sortBy]: order
            })
            .skip(limit * skip)
            .limit(limit)
            .exec()
            .then((data) => {
              return data;
            }).catch((err) => {
              throw new Error(err);
            }).finally(
              // () => this.disconnect()
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

  fillCollectionMovies = async ({ schema, data }) => {
    try {
      return new Promise((resolve, reject) => {
        this.connect()
          .then(() => {
            schema
              .create(data)
              .then((data) => {
                resolve(data);
              }).catch((err) => {
                reject(err);
              })
          });
      });
    } catch (err) {
      throw new Error(err);
    }
  }


  fillCollectionTrailers = async ({ schema, data, movieID }) => {
    try {
      return new Promise((resolve, reject) => {
        this.connect()
          .then(() => {
            schema
              .findOne({ "imdbID": movieID })
              .exec()
              .then((movie) => {
                movie.Trailers = data;
                movie.save(function (err) {
                  if (err) {
                    reject(err);
                  }
                  resolve();
                })
              }).catch((err) => {
                reject(err);
              }).finally(
                () => this.disconnect()
              )
          }).catch((err) => {
            reject(err);
          })
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  fillCollectionUnixDate = async ({ schema, movieID }) => {
    try {
      return new Promise((resolve, reject) => {
        this.connect()
          .then(() => {
            schema
              .findOne({ "imdbID": movieID })
              .exec()
              .then((movie) => {
                let dateUnix = Math.floor(new Date(`${movie.Released} GMT`).getTime() / 1000).toString(16);
                movie.ReleasedUnix = dateUnix;
                movie.save(function (err) {
                  if (err) {
                    reject(err);
                  }
                  resolve();
                })
              }).catch((err) => {
                reject(err);
              }).finally(
                // () => this.disconnect()
              )
          }).catch((err) => {
            reject(err);
          })
      });
    } catch (err) {
      throw new Error(err);
    }
  }

}