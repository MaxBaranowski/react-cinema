import React, { Component } from "react";

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      movie: null,
      isError: false
    };
  }

  componentDidMount() {
    try {
      fetch(`https://${window.location.hostname}:443/api/movies`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sortBy: "ReleasedUnix",
          order: "desc",
          limit: 50
        })
      }).then(response =>
        response
          .json()
          .then(data => {
            this.setState({
              movies: data
            });
            this.getPosters(); // add posters array to state movie
          })
          .catch(e => {
            this.setState({
              isError: true
            });
          })
      );
    } catch (e) {
      throw new Error("Error: ", e);
    }
  }

  render() {
    const movie = this.state.movie;
    if (movie) {
      return (
        <React.Fragment>
          <header className="home-banner">
            <img src={this.setPoster()} alt="" />
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <p>{movie.imdbRating}</p>
          </header>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <header className="home-banner">Loading...</header>
        </React.Fragment>
      );
    }
  }

  getPosters() {
    let movie = this.state.movies[Math.floor(Math.random() * 9) + 1]; // chose random movie for banner
    fetch(`https://${window.location.hostname}:443/api/poster`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: movie.imdbID
      })
    }).then(response =>
      response.json().then(data => {
        if (data.length < 1) {
          //  chose new movie if no posters
          this.getPosters(data);
          return;
        }
        movie["Posters"] = data;
        this.setState({
          movie: movie
        });
      })
    );
  }

  setPoster() {
    const movie = this.state.movie;
    if (movie.hasOwnProperty("Posters")) {
      return movie.Posters[
        Math.floor(Math.random() * movie.Posters.length) + 1
      ];
    } else {
      return movie.Poster;
    }
  }
}
