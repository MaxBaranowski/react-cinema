import React, { Component } from "react";

import Icon from "./components/Icon";
import SearchField from "./components/Search";
import "./styles.scss";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };

    this.SearchBar = React.createRef();

    this.handleSearchOnFocus = () => {
      this.SearchBar.current.classList.toggle("searchBar-active");
    };

    this.searchResults = data => {
      this.setState({
        searchResults: data
      });
    };
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div className="searchBar" ref={this.SearchBar}>
        <Icon />
        <SearchField
          handlerFocus={this.handleSearchOnFocus}
          handlerBlur={this.handleSearchOnFocus}
          returnSearchResultsToParent={this.searchResults}
        />
        <div className="search-results">{JSON.stringify(searchResults)}</div>
      </div>
    );
  }
}
