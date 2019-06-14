import React, { Component } from "react";

import Tabs from "./Tabs";
import Test from "./test";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: this.props.movie
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.movie !== prevState.movie) {
      return { movie: nextProps.movie };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movie !== this.props.movie) {
      this.setState({ movie: this.props.movie });
    }
  }

  componentDidMount() {
    this.setState({ movie: this.props.movie });
  }

  render() {
    console.log("R", this.state.movie);
    return (
      <Tabs movie={this.state.movie}>
        <div label="Overview">
          <p>1</p>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            doloribus nam autem cum porro in?
          </h1>
        </div>
        <div label="Media">
          <Test movie={this.state.movie}/>
        </div>
        <div label="Cast">
          <p>3</p>
        </div>
        <div label="Related Movies">
          <p>4</p>
        </div>
        <div label="Reviews">
          <p>5</p>
        </div>
      </Tabs>
    );
  }
}
