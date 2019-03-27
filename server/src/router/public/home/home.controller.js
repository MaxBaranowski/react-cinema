export default class Home {
  constructor() {
    this.text = "hello fro Home class controller"
  }

  show = (req, res, next) => {
    res.render("home");
  }
}
