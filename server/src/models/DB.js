import mongoose from 'mongoose';
import dotenv from "dotenv";
import { credentials } from "../credentials";
import { timeStamp } from "./time";

dotenv.config();

// disable mongoose buffers commands when the connection goes down until the driver manages to reconnect. 
mongoose.set('bufferCommands', true);

mongoose.connection.on("connected", function (ref) {
  console.log(`DB connection opened: ${timeStamp.full()}`);
});

mongoose.connection.on('disconnected', function () {
  console.log(`DB connection closed: ${timeStamp.full()}`);
});


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
  }
}
