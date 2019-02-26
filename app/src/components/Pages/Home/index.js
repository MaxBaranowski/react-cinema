import React, { Component } from 'react';
// import { store } from "../../../store";

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
      <div>
        <h1>HOME</h1>
        {/* {store.getState().showMenu.tos} */}
      </div >
    )
  }
}
