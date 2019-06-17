import React, { Component } from "react";

export default class test extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.movie)}
      </div>
    );
  }
}
