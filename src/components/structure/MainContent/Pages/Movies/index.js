import React, {Component} from "react";
import {Redirect} from "react-router";

import Movie from "../components/Movie";
import "./styles.scss";
import SearchPanel from "../components/SearchPanel/";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    
    this.createMoviesList = (Comp, MoviesList) => {
      let list = [];
      for (let movie of MoviesList) {
        list.push(
          <Comp
            key={movie.imdbID}
            id={movie.imdbID}
            img={movie.Poster}
            name={movie.Title}
            year={movie.Released}
            country={movie.Country}
          />
        );
      }
      return list;
    };
    
    this.state = {
      isError: false,
      movies: localStorage.getItem("movies")
        ? this.createMoviesList(
          Movie,
          JSON.parse(localStorage.getItem("movies"))
        )
        : []
    };
  }
  
  componentDidMount() {
    try {
      // fetch(`https://localhost:443/api/getMovies`)
      fetch(`https://react-cinema-server.herokuapp.com/api/movies`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response =>
        response
          .json()
          .then(data => {
            let movies = data;
            this.state.movies !== movies
              ? this.setState({
              movies: this.createMoviesList(Movie, movies)
            }) || localStorage.setItem("movies", JSON.stringify(movies))
              : void 0;
          })
          .catch(err => {
            this.setState({
              isError: err
            });
          })
      );
    } catch (err) {
      throw new Error("Error: " + err);
    }
  }
  
  render() {
    const {movies, isError} = this.state;
    if (isError) {
      return <Redirect to="/404"/>;
    } else if (movies) {
      return (
        <React.Fragment>
          <div className="content-wrapper">
            <main className="content-sections">
              <header>
                <SearchPanel/>
                {/* <main className="searchParams">
                  <div className="filter genre">
                    <span>All genres</span>
                  </div>
                  <div className="filter subgenres">
                    <span>All subgenres</span>
                  </div>
                  <div className="filter years">
                    <span>All years</span>
                  </div>
                  <div className="filter countries">
                    <span>All countries</span>
                  </div>
                  <div className="filter popularity">
                    <span>By Popularity</span>
                  </div>
                </main> */}
              </header>
              <section className="section">
                <header>
                  <h1>Movies</h1>
                </header>
                <div className="section-body">{this.state.movies}</div>
              </section>
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return <>Loading...</>;
    }
  }
}
