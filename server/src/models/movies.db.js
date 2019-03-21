import MongoDB from "./db/MongoDB";
import { ObjectId } from "mongodb";

export default class DB extends MongoDB {
  constructor(props) {
    super(props);
  }

  getOne = ({ id: movieID }) => {
    return new Promise((resolve, reject) => {
      let database = this.dataBase.db(process.env.DB_DATABASE_NAME);
      database.collection(
        process.env.DB_COLLECTION_NAME_BASIC,
        (error, collection) => {
          if (error) {
            console.log("Could not access collection: " + error.message);
            reject(error.message);
          } else {
            console.log(movieID, ObjectId("5c6178f4b0bba10d976f1220"))
            collection.find({
              "_id": ObjectId("5c6178f4b0bba10d976f1220")
            }).toArray().then((data) => {
              console.log(data)
              resolve(data);
            });

            // collection.findOne({ '_id': ObjectId(movieID) })
            //   .then((data) => {
            //     console.log(data)
            //     resolve(data);
            //   });

            // collection.findOne(
            //   {
            //     "nat": "CA"
            //   }
            // ).then((data) => {
            //   console.log(data)
            //   resolve(data);
            // });
          }
        })
    })
  }

  getSome = ({ }) => {

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