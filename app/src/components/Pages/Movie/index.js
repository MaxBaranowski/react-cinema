import React, { Component } from 'react';
import { Redirect } from "react-router";

import "./styles.scss";

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestedMovie: this.props.match.params.id,
      isError: false
    };
  };

  componentDidMount() {
    try {
      fetch(`https://${window.location.hostname}:443/api/movie`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.requestedMovie,
        })
      })
        .then(response =>
          response.json()
            .then(data => {
              this.setState({
                movie: data
              });
            }).catch(e => {
              this.setState({
                isError: e
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
      //return <Redirect to='/404' />;
      return <div>
        <pre>{JSON.stringify(isError, null, 2)}</pre>
      </div >
    } else if (movie) {
      return (
        <div>
          <pre>{JSON.stringify(movie, null, 2)}</pre>
        </div >
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
