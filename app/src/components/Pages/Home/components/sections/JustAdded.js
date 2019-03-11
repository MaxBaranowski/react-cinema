import React from "react";

import Movie from "../Movie"

export default function JustAdded(props) {
  const movies = [
    {
      id: 1,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    },
    {
      id: 2,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    },
    {
      id: 3,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    },
    {
      id: 4,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    },
    {
      id: 5,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    },
    {
      id: 6,
      img: "/images/1.jpg",
      name: "Star Wars: Episode IX",
      genre: "Fantasy"
    }
  ];

  return (
    <React.Fragment>
      <section className="section just-added">
        <header>
          <h1>Just Added</h1>
        </header>
        <div className="section-body">
          {props.createMoviesList(Movie, movies)}
        </div>
      </section>
    </React.Fragment>
  )
}
