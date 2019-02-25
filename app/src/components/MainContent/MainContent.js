import React, { Component } from "react";
import Routes from "../../Routes";
import "./styles.scss";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showMenu: true,
      windowBreakpoint: 1440,
      windowWidth: 0,
      windowHeight: 0
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  toggle() {
    this.setState({ showMenu: !this.state.showMenu });
    console.log(this.state)
  }

  render() {
    return (
      <main className="main-wrapper">
        {(this.state.windowWidth <= this.state.windowBreakpoint) && <span className="show-hide-nav" onClick={this.toggle}>></span>}
        <Routes />
      </main>
    )
  }

}
