import React, { Component } from 'react';
import MainContent from "./structure/MainContent"
import Navigation from "./structure/NavigationBar"
import './styles.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
