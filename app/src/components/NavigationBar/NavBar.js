import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default class NavBar extends Component {
  render() {
    return (
      <aside className="navigation" >
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

