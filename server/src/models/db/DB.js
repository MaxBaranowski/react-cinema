import { MongoClient, ObjectId } from "mongodb";

export default class DB {

  constructor(
    {
      database: databaseName = process.env.DB_DATABASE_NAME,
      collection: collectionName = process.env.DB_COLLECTION_NAME_BASIC
    } = {}
  ) {
    this.dataBaseName = databaseName;
    this.collectionName = collectionName;
    this.dataBase = null;
    this.connection = null;
  }

  connect = () => {
    return new Promise((resolve, reject) => {
      if (this.connection) {
        resolve();
      } else {
        MongoClient.connect(
          process.env.DB_URI,
          { useNewUrlParser: true }
        ).then((database) => {
          // "connect" method returns the new database connection
          this.connection = database;
          this.dataBase = database.db(this.dataBaseName);
          console.log("DB Connection opened");
          resolve();
        }, err => {
          console.log("Error connecting: " + err.message);
          reject(err.message);
        })
      }
    });
  };

  disconnect = () => {
    if (this.connection) {
      this.connection.close()
        .then(
          () => {
            console.log("DB Connection closed");
          },
          error => {
            console.log("Failed to close the database: " + error.message);
          }
        );
    }
  }

}

// find smth by ID (Object id: "_id")
// returns one record
export const findById = ({ id, collection }) => {
  return new Promise((resolve, reject) => {
    try {
      collection.find({
        "_id": ObjectId(id)
      })
        .toArray()
        .then(
          (data) => {
            resolve(data);
          }
        ).catch(
          error => {
            reject(error.message);
          }
        );
    } catch (error) {
      reject(error.message);
    }
  });
};

// find smth by key: value params
export const findByName = ({ name, value, collection }) => {
  return new Promise((resolve, reject) => {
    try {
      collection.find({
        [name]: { $regex: ".*^" + value + ".*" }
      })
        .limit(3)
        .toArray()
        .then(
          (data) => {
            resolve(data);
          }
        ).catch(
          error => {
            reject(error.message);
          }
        );
    } catch (error) {
      reject(error.message);
    }
  });
};