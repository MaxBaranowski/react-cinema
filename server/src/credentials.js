import dotenv from "dotenv";
dotenv.config();

export const credentials = {
  mongo: {
    development: {
      connectionString: `mongodb://${process.env.DB_USER}:${
        process.env.DB_PASS
      }@ds131296.mlab.com:31296/${process.env.DB_DATABASE_NAME}`
    },
    production: {
      connectionString: `mongodb://${process.env.DB_USER}:${
        process.env.DB_PASS
      }@ds131296.mlab.com:31296/${process.env.DB_DATABASE_NAME}`
    }
  },
  config: {
    useNewUrlParser: true
  }
};
