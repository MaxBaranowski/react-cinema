import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "./components/Icon";
import SearchField from "./components/Search";
import "./styles.scss";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      isSearchBarOnFocus: false
    };

    this.SearchBar = React.createRef();
    this.SearchFieldRef = {};

    this.searchResults = data => {
      this.setState({
        searchResults: data
      });
    };

    this.handleSearchOnFocus = this.handleSearchOnFocus.bind(this);
    this.handleSearchOnBlur = this.handleSearchOnBlur.bind(this);
    this.getSearchFieldRef = this.getSearchFieldRef.bind(this);
  }

  render() {
    const { searchResults, isSearchBarOnFocus } = this.state;

    return (
      <section className="searchBar">
        <main ref={this.SearchBar}>
          <Icon />
          <SearchField
            returnSearchResultsToParent={this.searchResults}
            onFocus={this.handleSearchOnFocus}
            returnToParent={this.getSearchFieldRef}
          />
        </main>
        {isSearchBarOnFocus && searchResults.length > 0 && (
          <aside
            className="search-results"
            onMouseLeave={this.handleSearchOnBlur}
          >
            {this.makeResults(searchResults)}
          </aside>
        )}
      </section>
    );
  }

  getSearchFieldRef(el) {
    return (this.SearchFieldRef = el.current);
  }

  makeResults(movies) {
    if (movies.length < 1) {
      return [];
    }
    let comp = [];
    for (let movie of movies) {
      comp.push(
        <Link
          key={"search-link-" + movie.imdbID}
          to={`/movie/` + movie.imdbID}
          onClick={this.handleSearchOnBlur}
        >
          <div className="search-results-item">
            <img src={movie.Poster} alt="" />
            <div className="search-result-description">
              <h1 className="title">{movie.Title}</h1>
              <p className="released">{movie.Released}</p>
              <p className="genre">{movie.Genre}</p>
              {/* <p className="rating">{movie.Ratings[0].Value}</p> */}
            </div>
          </div>
        </Link>
      );
    }
    return comp;
  }

  handleSearchOnFocus() {
    this.setState({ isSearchBarOnFocus: true });
  }

  handleSearchOnBlur() {
    this.setState({ isSearchBarOnFocus: false });
    this.SearchFieldRef.blur();
  }
}
