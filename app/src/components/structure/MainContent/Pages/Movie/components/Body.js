import React, { Component } from "react";

import Tabs from "./Tabs";

export default class Body extends Component {
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
    if(prevProps.movie!==this.props.movie){
      this.setState({movie: this.props.movie});
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <section className="movie-main">
        <header>
          <Tabs movie={movie} />
        </header>
      </section>
    );
  }
}
