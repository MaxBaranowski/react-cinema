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
            .limit(limit)
            // .sort({
            //   "Released": -1 //Sort by Date Added DESC
            // })
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