import React, { Component } from 'react';
import Routes from "../Routes";
import { Link } from "react-router-dom";

import './colors.scss';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
        </ul>
        <Routes />
      </>
    );
  }
}

export default App;
