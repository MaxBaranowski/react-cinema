import React, { Component } from "react";
import Routes from "../../Routes";
import { CSSTransition } from "react-transition-group";
import { store } from "../../store";
import "./styles.scss";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.element = React.createRef();
  }

  render() {
    return (
      <CSSTransition
        in={store.getState().showMenu}
        appear={true}
        timeout={0}
        classNames="main-wrapper"
        onEntering={() => {
          this.element.current.classList.remove("main-wrapper-full");
        }}
        onExited={() => {
          this.element.current.classList.add("main-wrapper-full");
        }}
      >
        <main className="main-wrapper" ref={this.element}>
          <Routes />
        </main>
      </CSSTransition>
    )
  }

}
