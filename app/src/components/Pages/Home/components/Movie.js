import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Movie = (props) => {
    return (
        <React.Fragment>
            <div className="movie">
                <Link to={`/movie/` + props.id}>
                    <div className="movie-body">
                        <img src={process.env.PUBLIC_URL + props.img} alt=""/>
                    </div>
                    <div className="movie-description">
                        <h3 className="movie-name">
                            {props.name}
                        </h3>
                        <p className="movie-genre">
                            {props.genre}
                        </p>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
};

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
};

export default Movie;