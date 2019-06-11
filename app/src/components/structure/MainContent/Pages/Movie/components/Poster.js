import React from "react";

import Button from "./Button";

export default function Poster(props) {
  const { movie } = props;
  return (
    <figure className="movie-poster">
      <div className="movie-poster-container">
        <img src={movie.Poster} alt="" />
      </div>
      <Button btnVal={"Watch Trailer"} bntAction={""} />
    </figure>
  );
}
