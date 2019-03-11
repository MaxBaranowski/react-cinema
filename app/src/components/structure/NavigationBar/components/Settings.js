import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faUsers, faSignInAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons'

export default function Settings() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/settings`}>
            <FontAwesomeIcon className="link_icon" icon={faCogs} />
            Settings
          </Link>
        </li>
        <li>
          <Link to={`/membership`}>
            <FontAwesomeIcon className="link_icon" icon={faUsers} />
            Membership
          </Link>
        </li>
        <li>
          {true ?
            <Link to={`/login`}>
              <FontAwesomeIcon className="link_icon" icon={faSignInAlt} />
              Login
            </Link>
            :
            <Link to={`/logout`}>
              <FontAwesomeIcon className="link_icon" icon={faPowerOff} />
              Sign Out
          </Link>
          }
        </li>
      </ul>
    </section>
  )
}
