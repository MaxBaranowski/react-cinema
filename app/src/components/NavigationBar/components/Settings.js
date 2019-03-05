import React from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <section className="menu-link-section">
      <ul>
        <li>
          <Link to={`/settings`}>Settings</Link>
        </li>
        <li>
          <Link to={`/membership`}>Membership</Link>
        </li>
        <li>
          {true ? <Link to={`/login`}>Login</Link> : <Link to={`/logout`}>Sign Out</Link>}
        </li>
      </ul>
    </section>
  )
}
