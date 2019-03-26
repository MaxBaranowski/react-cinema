import mongoose from 'mongoose';
import dotenv from "dotenv";
import {credentials} from "../credentials";
import {timeStamp} from "./time";

dotenv.config();

export default class DB {
  constructor() {
    this.env = process.env.NODE_ENV;
    this.connection = null;
  }
  
  connect = async () => {
    try {
      switch (this.env) {
        case 'development':
          this.connection = await mongoose.connect(credentials.mongo.development.connectionString, credentials.config);
          break;
        case 'production':
          this.connection = await mongoose.connect(credentials.mongo.production.connectionString, credentials.config);
          break;
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  
  disconnect = () => {
    if (this.connection) {
      this.connection.connection.close();
    } else {
      throw "To close DB connection, connection must be opened!";
    }
  };
  
  findById = async ({schema, id}) => {
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
  
  findByName = async ({schema, findKey, findValue, limit = 5}) => {
    try {
      return await this.connect()
        .then(() =>
          schema.find({
            [findKey]: {$regex: ".*^" + findValue + ".*"}
          }).limit(limit)
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
}

mongoose.connection.on("connected", function (ref) {
  console.log(`DB connection opened: ${timeStamp.full()}`);
});

mongoose.connection.on('disconnected', function () {
  console.log(`DB connection closed: ${timeStamp.full()}`);
});


// export default class DB {

//   constructor(
//     {
//       database: databaseName = process.env.DB_DATABASE_NAME,
//       collection: collectionName = process.env.DB_COLLECTION_NAME_BASIC
//     } = {}
//   ) {
//     this.dataBaseName = databaseName;
//     this.collectionName = collectionName;
//     this.dataBase = null;
//     this.connection = null;
//   }

//   connect = () => {
//     return new Promise((resolve, reject) => {
//       if (this.connection) {
//         resolve();
//       } else {
//         MongoClient.connect(
//           process.env.DB_URI,
//           { useNewUrlParser: true }
//         ).then((database) => {
//           // "connect" method returns the new database connection
//           this.connection = database;
//           this.dataBase = database.db(this.dataBaseName);
//           console.log("DB Connection opened");
//           resolve();
//         }, err => {
//           console.log("Error connecting: " + err.message);
//           reject(err.message);
//         })
//       }
//     });
//   };

//   disconnect = () => {
//     if (this.connection) {
//       this.connection.close()
//         .then(
//           () => {
//             console.log("DB Connection closed");
//           },
//           error => {
//             console.log("Failed to close the database: " + error.message);
//           }
//         );
//     }
//   }

// }

// // find smth by ID (Object id: "_id")
// // returns one record
// export const findById = ({ id, collection }) => {
//   return new Promise((resolve, reject) => {
//     try {
//       collection.find({
//         "_id": ObjectId(id)
//       })
//         .toArray()
//         .then(
//           (data) => {
//             resolve(data);
//           }
//         ).catch(
//           error => {
//             reject(error.message);
//           }
//         );
//     } catch (error) {
//       reject(error.message);
//     }
//   });
// };

// // find smth by key: value params
// export const findByName = ({ name, value, collection }) => {
//   return new Promise((resolve, reject) => {
//     try {
//       collection.find({
//         [name]: { $regex: ".*^" + value + ".*" }
//       })
//         .limit(3)
//         .toArray()
//         .then(
//           (data) => {
//             resolve(data);
//           }
//         ).catch(
//           error => {
//             reject(error.message);
//           }
//         );
//     } catch (error) {
//       reject(error.message);
//     }
//   });
// };