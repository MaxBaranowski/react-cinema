import React, {Component} from "react";

import Movie from "../../../components/Movie"

export default class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
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
          sortBy: "imdbRating",
          limit: 12
        })
      }).then(response =>
        response.json()
          .then(data => {
            this.setState({
              movies: this.props.createMoviesList(Movie, data.result)
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
    const {movies} = this.state;
    if (movies) {
      return (
        <React.Fragment>
          <section className="section recommended">
            <header>
              <h1>Recommended</h1>
            </header>
            <div className="section-body">
              {this.state.movies}
            </div>
          </section>
        </React.Fragment>
      )
    } else {
      return (
        <section className="section recommended">
          <header>
            <h1>Recommended</h1>
          </header>
          <div className="section-body">
            Loading...
          </div>
        </section>
      )
    }
  }
}

