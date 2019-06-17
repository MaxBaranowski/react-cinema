import React, { Component } from "react";

export default class test extends Component {
  render() {
    const { Title, Plot } = this.props.movie;
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
          <p>team</p>
        </div>
        <div className="tab-inner-section">
          <header>
            <h2>Review</h2>
            <h2 className="to-full-tab">View all reviews</h2>
          </header>
          <hr />
          <p>here will be last review to this movie</p>
        </div>
        <pre className="code">{JSON.stringify(this.props.movie, null, 2)}</pre>
      </section>
    );
  }
}


// getting cast 
// https://www.traileraddict.com/AQUAMAN
// itemprop="name">(.+?)<\/