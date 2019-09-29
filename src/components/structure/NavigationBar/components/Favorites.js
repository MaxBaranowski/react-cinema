import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBroadcastTower, faThumbsUp, faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Favorites() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/top`}>
            <FontAwesomeIcon className="link_icon" icon={faBroadcastTower}/>
            Top
          </Link>
        </li>
        <li>
          <Link to={`/likes`}>
            <FontAwesomeIcon className="link_icon" icon={faThumbsUp}/>
            Likes
          </Link>
        </li>
        
        <li>
          <Link to={`/favorites`}>
            <FontAwesomeIcon className="link_icon" icon={faHeart}/>
            Favorites
          </Link>
        </li>
      </ul>
    </section>
  )
}
