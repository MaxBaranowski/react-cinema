import React from "react";

export default function Sidebar(props) {
  const { Director, Writer, Released, Runtime, Awards, Genre } = props.movie;

  const makeOverView = () => {
    return (
      <aside className="movie-sidebar">
        <div className="overview">
          <div className="overview-title">Director:</div>
          <div className="overview-text">{Director}</div>
        </div>
        <div className="overview">
          <div className="overview-title">Writer:</div>
          <div className="overview-text">{Writer}</div>
        </div>
        <div className="overview">
          <div className="overview-title">Release Date:</div>
          <div className="overview-text">{Released}</div>
        </div>
        <div className="overview">
          <div className="overview-title">Run Time:</div>
          <div className="overview-text">{Runtime}</div>
        </div>
        <div className="overview">
          <div className="overview-title">Awards:</div>
          <div className="overview-text">{Awards}</div>
        </div>
        <div className="overview">
          <div className="overview-title">Genres:</div>
          <div className="overview-text">{Genre}</div>
        </div>
      </aside>
    );
  };

  return makeOverView();
}
