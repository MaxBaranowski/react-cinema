import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { store } from "../../store";
import { showHideMenu, showMenu } from "../../actions";
import { CSSTransition } from "react-transition-group";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowBreakpoint: 1365,//1440,
      windowWidth: 0,
      windowHeight: 0
    };

    this.element = React.createRef();

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
      store.dispatch(showMenu(store.getState().showMenu));
    }
  }

  toggle() {
    store.dispatch(showHideMenu(store.getState().showMenu));
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={store.getState().showMenu}
          appear={true}
          exit={true}
          timeout={0}
          classNames="menu"
        >
          < aside className="menu-wrapper" ref={this.element}>
            <nav>
              <aside>
                <ul>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li>
                    <Link to={`/login`}>Login</Link>
                  </li>
                </ul>
              </aside>
              {(this.state.windowWidth <= this.state.windowBreakpoint) && <span className="show-hide-nav" onClick={this.toggle}></span>}
            </nav >
          </ aside>
        </CSSTransition>
      </React.Fragment>
    )
  }
}

