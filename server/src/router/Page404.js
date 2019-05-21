export default (req, res, next) => {
  if (req.app.get("env") === "development") {
    res.render("404");
  } else {
    res.status(404).json({ error: "Route: " + req.url + " Not found." });
  }
};
