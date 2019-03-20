export default class API {
  constructor() {
    this.indexPageText = "Hi, this is API index page"
  }

  index = (req, res, next) => {
    res.status(200).json({
      message: this.indexPageText
    });;
  }

  test = (req, res, next) => {
    res.status(200).json({
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }
}
