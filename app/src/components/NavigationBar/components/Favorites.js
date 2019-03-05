import React from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/likes`}>Likes</Link>
        </li>
        <li>
          <Link to={`/top`}>Top</Link>
        </li>
        <li>
          <Link to={`/favorites`}>Favorites</Link>
        </li>
      </ul>
    </section>
  )
}
