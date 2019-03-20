import mongo, { MongoClient } from "mongodb";

export default class db {

  connect = (db_url = process.env.DB_URI, cb = console.log) => {
    MongoClient.connect(
      db_url,
      { useNewUrlParser: true },
      (err, connection) => {
        if (err) {
          throw new Error(err.errmsg);
        };

        connection.db(process.env.DB_DATABASE_NAME)
          .collection(process.env.DB_COLLECTION_NAME_BASIC)
          .find()
          .limit(1)
          .toArray()
          .then((data) => {
            connection.close();
            cb(data);
          });

      }
    );
  }

}