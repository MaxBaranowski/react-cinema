import React, { Component } from "react";
// import { store } from "redux/store/";

import Tabs from "./Tabs";
import Overview from "./Overview";

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
    const { movie } = this.state;

    return Object.keys(movie).length > 0 ? (
      <Tabs movie={this.state.movie}>
        <div label="Overview">
          <Overview movie={movie} />
        </div>
        <div label="Media">media will be here</div>
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
    ) : (
      <span>Loading...</span>
    );
  }
}
