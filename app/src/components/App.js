import React, { Component } from 'react';

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
