import React from 'react'

export default function Movie(props) {

  return (
    <React.Fragment>
      <div className="movie">

        <div className="movie-body">
          <img src={process.env.PUBLIC_URL + props.img} alt="" />
        </div>

        <div className="movie-description">
          <h3 className="movie-name">
            {props.name}
          </h3>
          <p className="movie-genre">
            {props.genre}
          </p>
        </div>

      </div>
    </React.Fragment>
  )
}
