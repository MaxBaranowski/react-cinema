import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showResults: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ showResults: !this.state.showResults });
  }

  getState() {
    return this.state.showResults;
  }

  render() {
    console.log(this.state.showResults)
    return (
      < aside className="navigation" >
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
        <button onClick={this.toggle}>Click</button>
      </aside >

    )
  }
}

