import React, {Component} from "react";

import Banner from "./components/Banner";
import Content from "./components/Content";

import "./styles.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <div className="home-wrapper">
          <Banner/>
          <Content/>
        </div>
      </React.Fragment>
    )
  }
}
