import React from "react";

import JustAdded from "./sections/JustAdded";
import Recommended from "./sections/Recommended";

export default function Content() {
  
  const createMoviesList = (Comp, MoviesList) => {
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
  
  
  return (
    <React.Fragment>
      <main className="home-sections">
        <JustAdded createMoviesList={createMoviesList}/>
        <Recommended createMoviesList={createMoviesList}/>
      </main>
    </React.Fragment>
  )
}
