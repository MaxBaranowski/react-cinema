import React from "react";

export default function Poster(props) {
  const { movie } = props;
  return (
    <div>
      poster
      <img src="" alt="" />
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </div>
  );
}
