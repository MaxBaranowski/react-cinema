import React from "react";
import { Link } from "react-router-dom";

export default function MainLinks() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/movies`}>Movies</Link>
        </li>
        <li>
          <Link to={`/shows`}>Shows</Link>
        </li>
        <li>
          <Link to={`/rated`}>Rated</Link>
        </li>
        <li>
          <Link to={`/songs`}>Songs</Link>
        </li>
      </ul>
    </section>
  )
}
