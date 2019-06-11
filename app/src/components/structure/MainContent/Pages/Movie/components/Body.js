import React from "react";

export default function Body(props) {
  const { movie } = props;
  return (
    <main className="movie-main">
      <header>
        <ul className="movie-tab-links">
          <li className="active">
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
          <li>
            <a href="#cast">Cast</a>
          </li>
          <li>
            <a href="#moviesrelated">Related Movies</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
      </header>
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
    </main>
  );
}
