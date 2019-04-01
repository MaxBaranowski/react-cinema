import React, {Component} from "react";

import Movie from "../../../components/Movie"

export default class JustAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    
    this.createMoviesList = (Comp, MoviesList) => {
      let list = [];
      for (let movie of MoviesList) {
        list.push(
          <Comp key={movie.imdbID} id={movie.imdbID} img={movie.Poster} name={movie.Title}
                year={movie.Released} country={movie.Country}>
          </Comp>
        );
      }
      return list;
    };
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
          limit: 12
        })
      }).then(response =>
        response.json()
          .then(data => {
            this.setState({
              movies: this.createMoviesList(Movie, data)
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
          <section className="section just-added">
            <header>
              <h1>Just Added</h1>
            </header>
            <div className="section-body">
              {this.state.movies}
            </div>
          </section>
        </React.Fragment>
      )
    } else {
      return (
        <section className="section just-added">
          <header>
            <h1>Just Added</h1>
          </header>
          <div className="section-body">
            <div className="section-body">
              Loading...
            </div>
          </div>
        </section>
      )
    }
  }
}
