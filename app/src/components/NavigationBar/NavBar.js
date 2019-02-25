import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: true,

    };

    // this.toggle = this.toggle.bind(this);
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }



  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        < aside className={this.state.showMenu  ? "navigation navigation-hide " : "navigation "} >
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

