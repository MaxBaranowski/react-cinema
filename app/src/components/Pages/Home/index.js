import React, { Component } from 'react';
import "./testGrid.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <div className="home-wrapper">
          <header className="home-banner">1</header>
          <main className="home-sections">
            <section className="section just-added">
              <header>
                <h1>Just Added</h1>
              </header>
              <div className="section-body">
                <div className="item">2_1</div>
                <div className="item">2_2</div>
                <div className="item">2_3</div>
                <div className="item">2_4</div>
                <div className="item">2_5</div>
                <div className="item">2_6</div>
              </div>
            </section>
            <section className="section recommended">
              <header>
                <h1>Recommended</h1>
              </header>
              <div className="section-body">
                <div className="item">3_1</div>
                <div className="item">3_2</div>
                <div className="item">3_3</div>
                <div className="item">3_4</div>
                <div className="item">3_5</div>
                <div className="item">3_6</div>
              </div>
            </section>
          </main>
        </div>
      </React.Fragment >
    )
  }
}
