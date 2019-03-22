import MongoDB from "./db/MongoDB";
import { ObjectId } from "mongodb";

export default class DB extends MongoDB {
  constructor(props) {
    super(props);
  }

  getOne = ({ id: movieID, collection: collectionName = process.env.DB_COLLECTION_NAME_BASIC }) => {
    return new Promise((resolve, reject) => {
      let database = this.dataBase.db(process.env.DB_DATABASE_NAME);
      database.collection(
        collectionName,
        (error, collection) => {
          if (error) {
            console.log(`Could not access collection ${collectionName}: ${error.message}`);
            reject(error.message);
          } else {

            collection.find({
              "_id": ObjectId(movieID)
            }).toArray().then((data) => {
              resolve(data);
            });

          }
        })
    })
  }

  findSome = ({ name, value, collection: collectionName = process.env.DB_COLLECTION_NAME_BASIC }) => {
    return new Promise((resolve, reject) => {
      let database = this.dataBase.db(process.env.DB_DATABASE_NAME);
      database.collection(
        collectionName,
        (error, collection) => {
          if (error) {
            console.log("Could not access collection: " + error.message);
            reject(error.message);
          } else {

            collection.find(
              { [name]: { $regex: ".*^" + value + ".*" } }
            ).toArray().then((data) => {
              resolve(data);
            });

          }
        })
    })
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


/**
  "protocol": "http",
  "sync":      false,
  "delayBetweenRetries": 150,
  "randomVarianceBetweenRetries": 90,
  "retryCallback": null,
  "log": true,
  "maxRetries": 18
 */