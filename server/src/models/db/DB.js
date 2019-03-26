// import { MongoClient, ObjectId } from "mongodb";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { credentials } from "../../credentials"

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
        default:
          throw new Error('Error, unknown env');
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  disconnect = () => {
    if (this.connection) {
      this.connection.connection.close();
    } else {
      throw "To close DB connection, connection must be opened!";
    }
  }

}

mongoose.connection.on("connected", function (ref) {
  console.log(`DB connection opened: ${new Date().toLocaleString("en-GB")}`);
});

mongoose.connection.on('disconnected', function () {
  console.log(`DB connection closed: ${new Date().toLocaleString("en-GB")}`);
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