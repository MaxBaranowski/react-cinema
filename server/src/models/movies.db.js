import MongoDB from "./db/MongoDB";

import {findById, findByName} from "./db/db.methods"

export default class DB extends MongoDB {
  
  constructor(props) {
    super(props);
  }
  
  getOne = ({id, collection: collectionName = this.collectionName}) => {
    return new Promise((resolve, reject) => {
      try {
        findById({
          "id": id,
          "collection": this.dataBase.collection(collectionName)
        }).then(data =>
          resolve(data)
        ).catch(err => {
          reject(err);
        });
      } catch (error) {
        reject(error.message);
      }
    })
  };
  
  getSomeByName = ({name, value, collection: collectionName = this.collectionName}) => {
    return new Promise((resolve, reject) => {
      try {
        findByName({
          "name": name,
          "value": value,
          "collection": this.dataBase.collection(collectionName)
        }).then(data =>
          resolve(data)
        ).catch(err => {
          reject(err);
        });
      } catch (error) {
        reject(error.message);
      }
    });
  };
  
  // getAll = () => {
  //   return new Promise((resolve, reject) => {
  //     let database = this.dataBase.db(process.env.DB_DATABASE_NAME);
  //
  //     database.collection(
  //       process.env.DB_COLLECTION_NAME_BASIC,
  //       (error, collection) => {
  //         if (error) {
  //           console.log("Could not access collection: " + error.message);
  //           reject(error.message);
  //         } else {
  //           collection
  //             .find()
  //             .limit(10)
  //             .toArray((error, data) => {
  //               if (error) {
  //                 console.log("Error reading fron collection: " + error.message);
  //                 reject(error.message);
  //               } else {
  //                 resolve(data);
  //               }
  //             })
  //         }
  //       }
  //     )
  //   });
  // }
  
}
