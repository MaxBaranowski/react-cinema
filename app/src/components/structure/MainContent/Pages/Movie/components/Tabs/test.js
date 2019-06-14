import React, { Component } from 'react'

export default class test extends Component {
  render() {
    console.log(this.props.movie)
    return (
      <div>
        test componennt
        {JSON.stringify(this.props.movie)} 
      </div>
    )
  }
}
