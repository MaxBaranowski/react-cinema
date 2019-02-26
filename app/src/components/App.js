import React, { Component } from 'react';
import MainContent from "./MainContent"
import Navigation from "./NavigationBar"
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
