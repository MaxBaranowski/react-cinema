import React, { Component } from 'react';
import { Redirect } from "react-router";

import Movie from "../Home/components/Movie"
import "./styles.scss";

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      movies: []
    };

    this.createMoviesList = (Comp, MoviesList) => {
      let list = [];
      for (let movie of MoviesList) {
        list.push(
          <Comp key={movie.Genre + "_" + movie._id} id={movie._id} img={movie.Poster} name={movie.Title}
            genre={movie.Genre} >
          </Comp>
        );
      }
      return list;
    };
  };

  componentDidMount() {
    try {
      fetch(`https://localhost:443/api/getMovies`)
        .then(response =>
          response.json()
            .then(movies => {
              // Country: "USA, Japan"
              // Genre: "Animation, Action, Adventure, Fantasy, Musical"
              // Poster: "https://m.media-amazon.com/images/M/MV5BMTcxNzUxNjExNV5BMl5BanBnXkFtZTcwNTcwMjgxMQ@@._V1_SX300.jpg"
              // Released: "11 May 1980"
              // Title: "The Return of the King"
              // Type: "movie"
              // Year: "1980"
              // imdbID: "tt0079802"
              // __v: 0
              // _id: "5c9caae6698e6706e17d3464"

              this.setState({
                movies: this.createMoviesList(Movie, movies)
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
    const { movies, isError } = this.state;
    if (isError) {
      return <Redirect to='/404' />;
    } else if (movies) {
      return (
        <React.Fragment>
          <div className="home-wrapper">
            <main className="home-sections">
              <section className="section recommended">
                <header>
                  <h1>Movies</h1>
                </header>
                <div className="section-body">
                  {this.state.movies}
                </div>
              </section>
            </main>
          </div>
        </React.Fragment >
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
