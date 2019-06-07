import React, { Component } from "react";
import { store } from "./redux/store";
import { hideMenu } from "./redux/actions";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });

      if (window.innerWidth <= 1299 && !store.getState().showMenu) {
        store.dispatch(hideMenu());
      }
    }

    render() {
      const Comp = this.state.component;

      return Comp ? <Comp {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
