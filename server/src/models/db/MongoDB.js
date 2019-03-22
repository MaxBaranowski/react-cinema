import mongo, { MongoClient, ObjectId } from "mongodb";
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
            console.log("DB Connection closed");
          },
          error => {
            console.log("Failed to close the database: " + error.message);
          }
        );
    }
  }

  findById = ({ id, collection }) => {
    return new Promise((resolve, reject) => {
      collection.find({
        "_id": ObjectId(id)
      }).toArray().then((data) => {
        console.log(data)
        resolve(data);
      }).catch(err => {
        console.log('error: ', err);
        reject(error.message);
      });
    });
  }

}