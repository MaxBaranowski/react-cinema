import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faTv, faStar, faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function MainLinks() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/`}>
            <FontAwesomeIcon className="link_icon" icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to={`/movies`}>
            <FontAwesomeIcon className="link_icon" icon={faFilm} />
            Movies
          </Link>
        </li>
        <li>
          <Link to={`/shows`}>
            <FontAwesomeIcon className="link_icon" icon={faTv} />
            Shows
          </Link>
        </li>
        <li>
          <Link to={`/rated`}>
            <FontAwesomeIcon className="link_icon" icon={faStar} />
            Rated
          </Link>
        </li>
        <li>
          <Link to={`/songs`}>
            <FontAwesomeIcon className="link_icon" icon={faHeadphones} />
            Songs
          </Link>
        </li>
      </ul>
    </section>
  )
}
