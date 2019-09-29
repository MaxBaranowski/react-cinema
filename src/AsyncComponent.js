import React, {Component} from "react";
import {store} from "./store";
import {hideMenu} from "./actions";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        component: null
      };
    }
    
    async componentDidMount() {
      const {default: component} = await importComponent();
      
      this.setState({
        component: component
      });
      
      if (window.innerWidth <= 1299) {
        store.dispatch(hideMenu(store.getState().showMenu));
      }
    }
    
    render() {
      const Comp = this.state.component;
      
      return Comp ? <Comp {...this.props} /> : null;
    }
  }
  
  return AsyncComponent;
}