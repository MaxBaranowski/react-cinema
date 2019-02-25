import React, { Component } from 'react';
import MainContent from "./MainContent/MainContent"
import Navigation from "./NavigationBar/NavBar"
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
