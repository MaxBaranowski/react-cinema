import MoviesDB from "#/models/movies.db.js";

export default class API {
  constructor() {
    this.indexPageText = "Hi, this is API index page"
  }

  index = (req, res, next) => {
    try {
      let db = new MoviesDB();
      db.connect().then(() => {
        // return db.getAll();
        // return db.getOne({ "id": "5c6178f4b0bba10d976f1220" });
        return db.findSome({ "name": "name.first", "value": "ol" });
      }, err => {
        console.log(err)
      }).then(data => {
        res.send(data)
        db.close();
      }, err => {
        console.log(err)
      });
    } catch (err) {
      res.status(200).json({
        "err": err
      });
    }
  }

  test = (req, res, next) => {
    res.status(200).json({
      "body": req.body,
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }
}
