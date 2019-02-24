import React, { Component } from 'react';
import './colors.scss';

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <>
        Learn React
        {<pre>{process.env.REACT_APP_SECRET_NAME}</pre>}
        {process.env.NODE_ENV}
      </>
    );
  }
}

export default App;
