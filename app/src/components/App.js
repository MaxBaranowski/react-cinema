import React, {Component} from 'react';
import MainContent from "./structure/MainContent"
import Navigation from "./structure/NavigationBar"
import './styles.scss';

import { Provider } from "react-redux";
import { store } from "../redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
        <MainContent/>
      </Provider>
    );
  }
}

export default App;
