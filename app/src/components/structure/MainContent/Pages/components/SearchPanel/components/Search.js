import React, { Component } from "react";

export default class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.SearchField = React.createRef();

    this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
  }

  componentDidMount() {
    this.props.returnToParent(this.SearchField);
  }

  render() {
    return (
      <div className="search-field">
        <input
          className=""
          type="text"
          onFocus={this.props.onFocus}
          onKeyUp={this.handleSearchKeyUp}
          ref={this.SearchField}
        />
      </div>
    );
  }

  handleSearchKeyUp() {
    let el = this.SearchField.current;
    const { returnSearchResultsToParent } = this.props;
    // this will clear input resuls if no were typed in
    if (el.value.length < 1) {
      return returnSearchResultsToParent([]);
    }

    fetch(`https://${window.location.hostname}:443/api/movies/name`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: el.value
      })
    })
      .then(response =>
        response.json().then(data => {
          returnSearchResultsToParent(data);
        })
      )
      .catch(e => console.log(e));
  }
}
