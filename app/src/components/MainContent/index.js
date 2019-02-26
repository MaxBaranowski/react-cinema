import React, { Component } from "react";
import Routes from "../../Routes";
import { store } from "../../store";
import { showHideNavigation } from "../../actions"
import "./styles.scss";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    store.dispatch(showHideNavigation(store.getState().showMenu));
  }

  render() {
    return (
      <main className={store.getState().showMenu ? "main-wrapper" : "main-wrapper main-wrapper-full"}>
        {(this.state.windowWidth <= this.state.windowBreakpoint) && <span className="show-hide-nav" onClick={this.toggle}>></span>}
        <Routes />
      </main>
    )
  }

}
