import MoviesDB from "../../models/movies.db.js";

export default class API {
  constructor() {
    this.indexPageText = "Hi, this is API index page"
  }
  
  getMovie = (req, res, next) => {
    try {
      let db = new MoviesDB();
      db.connect().then(() => {
        // return db.getAll();
        return db.getOne({"id": "5c6178f4b0bba10d976f1220"});
        // return db.findSome({ "name": "name.first", "value": "ol" });
      }, err => {
        console.log(err);
      }).then(data => {
        res.send(data);
        db.close();
      }, err => {
        console.log(err)
      });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };
  
  getMoviesByName = (req, res, next) => {
    const {
      name: movieName = "",
    } = req.body;
    console.log(movieName)
    try {
      let db = new MoviesDB();
      db.connect().then(() => {
        // return db.getAll();
        return db.getSomeByName({
          "name": "name.first",
          "value": movieName
        });
        // return db.findSome({ "name": "name.first", "value": "ol" });
      }, err => {
        console.log(err);
      }).then(data => {
        res.send(data);
        db.close();
      }, err => {
        console.log(err)
      });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
    
  };
  
  
  index = (req, res) => {
    res.status(200).json({
      "body": req.body,
      "name": "test",
      "time": new Date().toLocaleDateString()
    });
  }
}
