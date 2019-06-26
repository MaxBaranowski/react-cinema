import React, { Component } from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie
    };
    console.log(props.movie)

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.movie !== prevState.movie) {
      console.log(2, this.state.movie);
      return { movie: nextProps.movie };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movie !== this.props.movie) {
      // get cast for current movie
      this.setState({ movie: this.props.movie });
      console.log(1, this.state.movie);
    }
  }

  componentDidMount() {
    this.setState({ movie: this.props.movie });
  }

  render() {
    const { Title, Plot, Cast } = this.state.movie;
    return (
      <section>
        <div className="tab-inner-section">
          <header>
            <h2>{Title}</h2>
          </header>
          <hr />
          <p>{Plot}</p>
        </div>
        <div className="tab-inner-section">
          <header>
            <h2>Media</h2>
            <h2 className="to-full-tab">View all media</h2>
          </header>
          <hr />
          <p>here will be trailers</p>
        </div>
        <div className="tab-inner-section">
          <header>
            <h2>Cast</h2>
            <h2 className="to-full-tab">View all cast</h2>
          </header>
          <hr />
          <pre className="code">{JSON.stringify(Cast, null, 2)}</pre>
        </div>
        <div className="tab-inner-section">
          <header>
            <h2>Review</h2>
            <h2 className="to-full-tab">View all reviews</h2>
          </header>
          <hr />
          <p>here will be last review to this movie</p>
        </div>
        {/* <pre className="code">{JSON.stringify(this.props.movie, null, 2)}</pre> */}
      </section>
    );
  }

  createCast(cast) {
    // console.log(4, cast);
    // let CastTepmlate = [];
    // for (var person of cast) {
    //   CastTepmlate.push(<li key={"cast_" + person.actor}>{person.actor}</li>);
    // }
    // return <ul>{CastTepmlate}</ul>;
  }
}

// getting cast
// https://www.traileraddict.com/AQUAMAN
// itemprop="name">(.+?)<\/
//itemprop="name">([a-zA-Z -]*)<
