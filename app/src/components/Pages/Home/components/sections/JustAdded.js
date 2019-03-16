import React, {Component} from "react";

import Movie from "../Movie"

export default class JustAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    
    this.movies = [
      {
        id: 11,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
      },
      {
        id: 12,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
      },
      {
        id: 13,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
      },
      {
        id: 14,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
      },
      {
        id: 15,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
      },
      {
        id: 16,
        img: "/images/1.jpg",
        name: "Star Wars: Episode IX",
        genre: "Fantasy"
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
  }
}
