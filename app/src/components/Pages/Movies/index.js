import React, { Component } from 'react';
import { Redirect } from "react-router";

import "./styles.scss";

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false
    };
  };

  componentDidMount() {
    try {
      fetch(`https://localhost:443/api/getMovies`)
        .then(response =>
          response.json()
            .then(movie => {
              console.log(movie)
              this.setState({
                movie: movie.result
              });
            }).catch(e => {
              this.setState({
                isError: true
              });
            })
        )
    } catch (e) {
      throw new Error("Error: ", e);
    }
  }

  render() {
    const { movie, isError } = this.state;
    if (isError) {
      return <Redirect to='/404' />;
    } else if (movie) {
      return (
        <div>
          hello from video with id: {this.props.id} and name: {this.props.name} <br />
          Get video id from parms: {this.props.match.params.id}
          <br />
          <hr />
          <pre>
            {JSON.stringify(movie, null, 2)}
          </pre>
        </div>
      );
    } else {
      return (
        <>
          Loading...
        </>
      )
    }
  }
}
