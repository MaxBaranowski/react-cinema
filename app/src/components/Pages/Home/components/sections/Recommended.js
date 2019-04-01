import React, { Component } from "react";

import Movie from "../../../components/Movie"

export default class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.movies = [
      {
        id: 1,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      },
      {
        id: 2,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      },
      {
        id: 3,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      },
      {
        id: 4,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      },
      {
        id: 5,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      },
      {
        id: 6,
        img: "/images/3.jpg",
        name: "The Secret Life of Pets 2",
        genre: "Cartoon"
      }
    ];
  }

  componentDidMount() {
    this.setState({
      movies: this.props.createMoviesList(Movie, this.movies)
    });
  }

  render() {
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
  }
}

