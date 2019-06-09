import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { store } from "../../../redux/store";
import { showHideMenu, showMenu } from "../../../redux/actions";

import Avatar from "./components/Avatar";
import TopLinks from "./components/MainLinks";
import MiddleLinks from "./components/Favorites";
import BottomLinks from "./components/Settings";

import "./styles.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowBreakpoint: 1299, //1440,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };

    this.element = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    // show menu if screen resolution changes
    if (this.state.windowWidth >= this.state.windowBreakpoint) {
      store.dispatch(showMenu());
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
          <aside
            className={
              "menu-wrapper active" + (store.getState().showMenu ? " " : "  menu-exit-done")
            }
            ref={this.element}
          >
            <nav>
              <Avatar />
              <section className="menu-link-wrapper">
                <div className="menu-scroll">
                  <TopLinks />
                  <MiddleLinks />
                  <BottomLinks />
                </div>
              </section>
              {this.state.windowWidth <= this.state.windowBreakpoint && (
                <div id="show-hide">
                  <div
                    className={
                      "show-hide-container" +
                      (store.getState().showMenu ? " active" : " ")
                    }
                    onClick={this.toggle}
                  >
                    <div className="dot">
                      <span className="show-hide-nav">&#9776;</span>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </aside>
        </CSSTransition>
      </React.Fragment>
    );
  }
}
