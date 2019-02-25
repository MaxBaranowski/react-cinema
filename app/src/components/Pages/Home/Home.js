import React, { Component } from 'react';

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
      </div >
    )
  }
}
