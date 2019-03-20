import mongo, { MongoClient } from "mongodb";
/**
 *  1. Connect to the database
    2. Perform all of the required database actions for the current request
    3. Disconnect from the database
 */
export default class MongoDB {

  constructor() {
    this.dataBase = null;
  }

  connect = () => {
    return new Promise((resolve, reject) => {
      if (this.dataBase) {
        resolve();
      } else {
        MongoClient.connect(
          process.env.DB_URI,
          { useNewUrlParser: true }
        ).then((database) => {
          // "connect" method returns the new database connection
          this.dataBase = database;
          console.log("DB Connection opened")
          resolve();
        }, err => {
          console.log("Error connecting: " + err.message);
          reject(err.message);
        })
      }
    });
  }

  close = () => {
    if (this.dataBase) {
      this.dataBase.close()
        .then(
          () => {
            console.log("DB Connection closed")
          },
          error => {
            console.log("Failed to close the database: " + error.message)
          }
        )
    }
  }

  getAll = () => {
    return new Promise((resolve, reject) => {
      let database = this.dataBase.db(process.env.DB_DATABASE_NAME);

      database.collection(
        process.env.DB_COLLECTION_NAME_BASIC,
        (error, collection) => {
          if (error) {
            console.log("Could not access collection: " + error.message);
            reject(error.message);
          } else {
            collection
              .find()
              .limit(10)
              .toArray((error, data) => {
                if (error) {
                  console.log("Error reading fron collection: " + error.message);
                  reject(error.message);
                } else {
                  resolve(data);
                }
              })
          }
        }
      )
    });
  }

}