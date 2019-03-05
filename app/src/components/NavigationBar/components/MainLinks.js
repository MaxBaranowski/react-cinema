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
          <Link to={`/login`}>Login</Link>
        </li>
      </ul>
    </section>
  )
}
