import db from "#/models/db/MongoDB";

export default class API {
  constructor() {
    this.indexPageText = "Hi, this is API index page"
  }

  index = async (req, res, next) => {
    try {
      let DB = new db();
      await DB.connect();

    } catch (err) {
      res.status(200).json({
        "err": err
      });
    }
    res.status(200).json({
      message: this.indexPageText
    });;
  }

  test = (req, res, next) => {
    res.status(200).json({
      "body": req.body,
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }
}
