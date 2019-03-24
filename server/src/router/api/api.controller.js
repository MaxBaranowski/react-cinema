import MoviesDB from "../../models/movies.db.js";

export default class API {
  constructor() {
  }
  
  getMovie = (req, res) => {
    try {
      const {
        id: movieId = "5c6178f4b0bba10d976f1220",
      } = req.body;
      let db = new MoviesDB();
      db.connect().then(() => {
        return db.getOne({"id": movieId});
      }, err => {
        res.status(500).send({error: err});
        db.close();
      }).then(data => {
        res.send(data);
        db.close();
      }, err => {
        res.status(500).send({error: err});
        db.close();
      });
    } catch (err) {
      res.status(500).send({error: err});
    }
  };
  
  getMoviesByName = (req, res) => {
    try {
      const {
        name: movieName = "",
      } = req.body;
      
      let db = new MoviesDB();
      db.connect().then(() => {
        // return db.getAll();
        return db.getSomeByName({
          "name": "name.first",
          "value": movieName
        });
      }, err => {
        res.status(500).send({error: err});
        db.close();
      }).then(data => {
        res.send(data);
        db.close();
      }, err => {
        res.status(500).send({error: err});
        db.close();
      });
    } catch (err) {
      res.status(500).send({error: err});
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
