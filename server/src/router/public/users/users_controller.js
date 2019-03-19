export default class User {
  constructor() {
    this.text = "hello fro User class controller"
  }

  show = (req, res, next) => {
    res.send(this.text);
  }
}
