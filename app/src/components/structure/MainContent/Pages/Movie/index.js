import React, { Component } from "react";
// import { Redirect } from "react-router";

import "./styles.scss";
import SearchPanel from "../components/SearchPanel/index";
import Poster from "./components/Poster";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedMovie: this.props.match.params.id,
      movie: {},
      isError: false
    };
  }

  // imags by film id
  // https://allpeliculas.io/source/movies/poster/tt5177088/

  // actors
  // https://allpeliculas.io/source/actors/Anna-Camp/

  // trilers
  // https://v.traileraddict.com/124544

  // componentDidUpdate will cause a re render on a setState call, which getDerivedStateFromProps will not
  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(1, nextProps.match.params.id, prevState);
    if (nextProps.match.params.id !== prevState.requestedMovie) {
      return {
        requestedMovie: nextProps.match.params.id
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.state.requestedMovie) {
      this.getmovie();
    }
  }

  componentDidMount() {
    try {
      this.getmovie();
    } catch (e) {
      throw new Error("Error: ", e);
    }
  }

  render() {
    const { movie, isError } = this.state;
    if (isError) {
      //return <Redirect to='/404' />;
      return (
        <div>
          <pre>{JSON.stringify(isError, null, 2)}</pre>
        </div>
      );
    } else if (movie) {
      return (
        <div>
          <header>
            <SearchPanel />
          </header>
          <Poster movie={movie} />
        </div>
      );
    } else {
      return <>Loading...</>;
    }
  }

  getmovie() {
    fetch(`https://${window.location.hostname}:443/api/movies/movie`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.requestedMovie
      })
    }).then(response =>
      response
        .json()
        .then(data => {
          this.setState({
            movie: data
          });
        })
        .catch(e => {
          this.setState({
            isError: e
          });
        })
    );
  }
}
