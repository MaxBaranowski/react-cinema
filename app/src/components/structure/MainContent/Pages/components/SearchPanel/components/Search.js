import React from "react";

export default function SearchField(props) {
  const Search = React.createRef();

  const handleSearchKeyUp = () => {
    let el = Search.current;
    // this will clear input resuls if no were typed in
    if (el.value.length < 1) {
      return props.returnSearchResultsToParent([]);
    }
    // console.log(el.value);
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
          props.returnSearchResultsToParent(data);
        })
      )
      .catch(e => console.log(e));
  };

  return (
    <div className="search-field">
      <input
        className=""
        type="text"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyUp={handleSearchKeyUp}
        ref={Search}
      />
    </div>
  );
}
