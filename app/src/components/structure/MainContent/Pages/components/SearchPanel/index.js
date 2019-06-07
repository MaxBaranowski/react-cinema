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
      // this.SearchBar.current.classList.toggle("searchBar-active");
      console.log(this.SearchBar.current.classList);
    };

    this.searchResults = data => {
      this.setState({
        searchResults: data
      });
    };

    this.makeResults = movies => {
      if (movies.length < 1) {
        return [];
      }
      let comp = [];
      for (let movie of movies) {
        comp.push(
          <div key={movie.imdbID} className="search-results-item">
            <img src={movie.Poster} alt="" />
            <div className="search-result-description">
              <h1 className="title">{movie.Title}</h1>
              <p className="released">{movie.Released}</p>
              <p className="genre">{movie.Genre}</p>
              {/* <p className="rating">{movie.Ratings[0].Value}</p> */}
            </div>
          </div>
        );
      }
      return comp;
    };
  }

  render() {
    const { searchResults } = this.state;
    return (
      <section className="searchBar">
        <main ref={this.SearchBar}>
          <Icon />
          <SearchField
            handlerFocus={this.handleSearchOnFocus}
            handlerBlur={this.handleSearchOnFocus}
            returnSearchResultsToParent={this.searchResults}
          />
        </main>
        <aside className="search-results">
          {this.makeResults(searchResults)}
        </aside>
      </section>
    );
  }
}
