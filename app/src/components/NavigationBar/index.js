import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { store } from "../../store";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        < aside className={store.getState().showMenu ? "navigation" : "navigation navigation-hide"} >
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            </ul>
          </nav >
        </aside >
      </React.Fragment>
    )
  }
}

