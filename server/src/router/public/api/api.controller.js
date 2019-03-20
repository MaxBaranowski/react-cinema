import MongoDBConnect from "#/models/db/MongoDB";

export default class API {
  constructor() {
    this.indexPageText = "Hi, this is API index page"
  }

  index = (req, res, next) => {
    try {
      let db = new MongoDBConnect();
      db.connect().then(() => {
        return db.getAll();
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
