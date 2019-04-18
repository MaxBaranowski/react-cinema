import React, { Component } from "react";

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      isError: false
    }
  }

  componentDidMount() {
    try {
      fetch(`https://${window.location.hostname}:443/api/getMovies`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sortBy: "ReleasedUnix",
          limit: 10
        })
      }).then(response =>
        response.json()
          .then(data => {
            let movies = data;
            this.setState({
              movie: movies[Math.floor(Math.random() * 9) + 1]
            });
          }).catch(e => {
            this.setState({
              isError: true
            });
          })
      )
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
            <img src={movie.Poster} alt="" />
          </header>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <header className="home-banner">
            Loading...
          </header>
        </React.Fragment>
      )
    }
  }
}
