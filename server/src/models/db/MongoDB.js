import mongo, { MongoClient } from "mongodb";
/**
 *  1. Connect to the database
    2. Perform all of the required database actions for the current request
    3. Disconnect from the database
 */
export default class MongoDB {

  constructor() {
    this.db = null;
  }

  connect = (uri = process.env.DB_URI) => {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve();
      } else {
        MongoClient.connect(
          uri,
          { useNewUrlParser: true }
        ).then((database) => {
          // "connect" method returns the new database connection
          this.db = database;
          resolve();
        }, err => {
          console.log("Error connecting: " + err.message);
          reject(err.message);
        })
      }
    });
  }

  close = () => {
    if (this.db) {
      this.db.close()
        .then(
          () => {
            console.log("Connection closed")
          },
          error => {
            console.log("Failed to close the database: " + error.message)
          }
        )
    }
  }

}