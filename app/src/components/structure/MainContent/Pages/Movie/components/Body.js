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

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.movie !== this.props.movie) {
      // get cast for current movie
      await this.setState({ movie: this.props.movie });
      this.getCast();
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <section className="movie-main">
        <Tabs movie={movie} />
      </section>
    );
  }

  async getCast() {
    const { movie } = this.state;
    let result;

    await fetch(`https://${window.location.hostname}:443/api/cast`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: movie.imdbID
      })
    })
      .then(response =>
        response.json().then(data => {
          movie["Cast"] = data;
          result = movie;
          console.log("cast loading", this.state.movie.Cast);
        })
      )
      .catch(e => console.log(e));
    // set updated data
    this.setState({
      movie: result
    });
  }
}
