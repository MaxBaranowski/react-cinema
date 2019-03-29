import DB from "./DB";

export default class Database extends DB {
  constructor(props) {
    super(props);
  }

  findById = async ({ schema, id }) => {
    try {
      return await this.connect()
        .then(() =>
          schema.findById(id).exec() //will return a promise if no callback is provided.
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

  findByParams = async ({ schema, findKey, findValue, limit = 5 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            // .find({ [findKey]: {$regex: ".*^" + findValue + ".*"} })
            .find()
            .where({
              [findKey]: { $regex: ".*^" + findValue + ".*" }
            })
            .limit(limit)
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

  getMovies = async ({ schema, limit = 50 }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .find()
            .sort({
              // "Year": -1 //-1 \|/ 0 /|\
              "ReleasedUnix": -1 //Sort by Date Added DESC
            })
            .limit(limit)

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
  }

  removeMovies = async ({ schema, condition }) => {
    try {
      return await this.connect()
        .then(() =>
          schema
            .remove({
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
  }

  updateMovies = async ({ schema }) => {
    let _db = this;
    try {
      return await this.connect()
        .then(() =>
          schema
            //.update({}, { '$set': { 'ReleasedUnix': "NaN" } }, { multi: true })
            .find({})
            .limit(10)
            .exec()
            .then((data) => {
              let i = 1;
              data.forEach(function (doc) {
                ((doc, i) => {
                  setTimeout(() => {
                    let dateUnix = Math.floor(new Date(`${doc.Released} GMT`).getTime() / 1000).toString(16);
                    console.log(i, doc.Released, dateUnix)
                    schema.findOne({ "imdbID": doc.imdbID })
                      .exec()
                      .then((data) => {
                        data.ReleasedUnix = dateUnix;
                        data.save(function (err) {
                          if (err) {
                            throw new Error(err);
                          }
                        })
                        //         if (i == data.length) {
                        //           // _db.disconnect()
                      }).catch((err) => {
                        throw new Error(err);
                      });
                  }, i);
                })(doc, i)
                i += 1;
              })
            })
        ).catch((err) => {
          throw new Error(err);
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