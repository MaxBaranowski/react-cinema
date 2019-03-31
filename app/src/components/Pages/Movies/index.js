import React, {Component} from 'react';
import {Redirect} from "react-router";

import Movie from "../Home/components/Movie"
import "./styles.scss";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    
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
    
    this.state = {
      isError: false,
      movies: localStorage.getItem("movies") ? this.createMoviesList(Movie, JSON.parse(localStorage.getItem("movies"))) : []
    };
    
  };
  
  componentDidMount() {
    try {
      // fetch(`https://localhost:443/api/getMovies`)
      fetch(`https://${window.location.hostname}:443/api/getMovies`)
        .then(response =>
          response.json()
            .then(movies => {
              // localStorage.setItem("movies", JSON.stringify(movies));
              
              this.state.movies !== movies ?
                this.setState({
                  movies: this.createMoviesList(Movie, movies)
                }) || localStorage.setItem("movies", JSON.stringify(movies))
                : void (0);
              
            }).catch(e => {
            this.setState({
              isError: e
            })
          })
        )
    } catch (e) {
      throw new Error("Error: " + e);
    }
  }
  
  render() {
    const {movies, isError} = this.state;
    if (isError) {
      return <Redirect to='/404'/>;
    } else if (movies) {
      return (
        <React.Fragment>
          <div className="content-wrapper">
            <main className="content-sections">
              <header>
                <div className="searchBar">
                  <input type="text"/>
                </div>
                <main className="searchParams">
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
                </main>
              </header>
              <section className="section">
                <header>
                  <h1>Movies</h1>
                </header>
                <div className="section-body">
                  {this.state.movies}
                </div>
              </section>
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          Loading...
        </>
      )
    }
  }
}
