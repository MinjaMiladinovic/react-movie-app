import React from 'react';
import { Link } from 'react-router-dom';
import "../../style.css";

const MovieDetails = (props) => {
  return (
    <div className="col-md-6 col-sm-12">
      <Link to={`/movieDetails/${props.movie.id}`}>
        <div className="text-center mb-3 border border-dark">
          {props.movie.backdrop_path &&
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
              alt={`${props.movie.title}`}
            />
          }
          {props.movie.title &&
            <h4 className="text-center mt-3">{props.movie.title}</h4>
          }
        </div>
      </Link>
    </div>
  )
}

export default MovieDetails;