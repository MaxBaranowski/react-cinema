import React, { Component } from "react";
import Routes from "../../Routes";
import { store } from "../../store";
import "./styles.scss";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <main className={store.getState().showMenu ? "main-wrapper" : "main-wrapper main-wrapper-full"}>
        <Routes />
      </main>
    )
  }

}
