import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { store } from "../../store";
import { showHideNavigation, showNavigation } from "../../actions";
import { CSSTransition } from "react-transition-group";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowBreakpoint: 1440,
      windowWidth: 0,
      windowHeight: 0
    };
    this.toggle = this.toggle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
    // show menu if screen resolution changes
    if (this.state.windowWidth >= this.state.windowBreakpoint) {
      store.dispatch(showNavigation(store.getState().showMenu));
    }
  }

  toggle() {
    store.dispatch(showHideNavigation(store.getState().showMenu));
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={store.getState().showMenu}
          appear={true}
          timeout={300}
          classNames="menu"
        >
          < aside className="menu">
            <nav>
              <ul>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/login`}>Login</Link>
                </li>
              </ul>
            </nav >
            {(this.state.windowWidth <= this.state.windowBreakpoint) && <span className="show-hide-nav" onClick={this.toggle}></span>}
          </ aside>
        </CSSTransition>
      </React.Fragment>
    )
  }
}

