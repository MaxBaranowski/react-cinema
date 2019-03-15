import React from "react";
import { Link } from "react-router-dom";

import JustAdded from "./sections/JustAdded";
import Recommended from "./sections/Recommended";

export default function Content() {

  const createMoviesList = (Comp, MoviesList) => {
    let list = [];
    for (let movie of MoviesList) {
      list.push(
        <Link key={movie.genre + "_" + movie.id} to={`/movie/` + movie.id}>
          <Comp id={movie.id} img={movie.img} name={movie.name + " " + movie.id}
            genre={movie.genre} />
        </Link>
      );
    }
    return list;
  };

  return (
    <React.Fragment>
      <main className="home-sections">
        <JustAdded createMoviesList={createMoviesList} />
        <Recommended createMoviesList={createMoviesList} />
      </main>
    </React.Fragment>
  )
}
