import React from "react";

import Movie from "../Movie"

export default function Recommended(props) {

  const movies = [
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

  return (
    <React.Fragment>
      <section className="section recommended">
        <header>
          <h1>Recommended</h1>
        </header>
        <div className="section-body">
          {props.createMoviesList(Movie, movies)}
        </div>
      </section>
    </React.Fragment>
  )
}
