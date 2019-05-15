import DB from "./DB";

export default class Database extends DB {
  constructor(props) {
    super(props);
  }

  getOne = async ({ schema, condition }) => {
    try {
      let result = await this.connect().then(() =>
        schema
          .findOne({
            [condition.key]: condition.value
          })
          .exec() //will return a promise if no callback is provided.
          .then(data => {
            return data;
          })
          .catch(err => {
            throw new Error(err);
          })
      );
      this.disconnect();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };

  getSomeByName = async ({ schema, condition, limit }) => {
    try {
      let result = await this.connect().then(() =>
        schema
          .find()
          .where({
            [condition.key]: { $regex: "(?i).*" + condition.value + ".*" } // case insensitive + search inside world
          })
          .limit(limit)
          .exec()
          .then(data => {
            return data;
          })
          .catch(err => {
            throw new Error(err);
          })
      );
      this.disconnect();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };

  getMany = async ({ schema, limit, sortBy, order, skip }) => {
    try {
      let result = await this.connect().then(() =>
        schema
          .find()
          .sort({
            [sortBy]: order
          })
          .skip(limit * skip)
          .limit(limit)
          .exec()
          .then(data => {
            return data;
          })
          .catch(err => {
            throw new Error(err);
          })
      );
      this.disconnect();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };

  remove = async ({ schema, condition }) => {
    try {
      let result = await this.connect().then(() =>
        schema
          .deleteMany({
            [condition.key]: condition.value
          })
          .exec()
          .then(data => {
            return data;
          })
          .catch(err => {
            throw new Error(err);
          })
      );
      this.disconnect();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };

  // fillCollectionMovies = async ({ schema, data }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect().then(() => {
  //         schema
  //           .create(data)
  //           .then(data => {
  //             resolve(data);
  //           })
  //           .catch(err => {
  //             reject(err);
  //           });
  //       });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };

  // fillCollectionTrailers = async ({ schema, data, movieID }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect()
  //         .then(() => {
  //           schema
  //             .findOne({ imdbID: movieID })
  //             .exec()
  //             .then(movie => {
  //               movie.Trailers = data;
  //               movie.save(function(err) {
  //                 if (err) {
  //                   reject(err);
  //                 }
  //                 resolve();
  //               });
  //             })
  //             .catch(err => {
  //               reject(err);
  //             })
  //             .finally
  //             // () => this.disconnect()
  //             ();
  //         })
  //         .catch(err => {
  //           reject(err);
  //         });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };

  // fillCollectionUnixDate = async ({ schema, movieID }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect()
  //         .then(() => {
  //           schema
  //             .find()
  //             .limit(0)
  //             .exec()
  //             .then(movies => {
  //               movies.forEach(function(movie) {
  //                 let dateUnix = Math.floor(
  //                   new Date(`${movie.Released} GMT`).getTime() / 1000
  //                 ).toString(16);
  //                 movie.ReleasedUnix = dateUnix;
  //                 movie.save(function(err) {
  //                   if (err) {
  //                     reject(err);
  //                   }
  //                   resolve();
  //                 });
  //               });
  //             });
  //         })
  //         .catch(err => {
  //           reject(err);
  //         });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
}
