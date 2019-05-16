import React from 'react';
import { Link } from 'react-router-dom';
import "../../style.css";

const TvShowDetails = (props) => {
  return (
    <div className="col-md-6 col-sm-12">
      <Link to={`/tvShowDetails/${props.show.id}`}>
        <div className="text-center mb-3 border border-dark">
          {props.show.backdrop_path &&
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original/${props.show.backdrop_path}`}
              alt={`${props.show.name}`}
            />
          }
          {props.show.name &&
            <h4 className="text-center mt-3">{props.show.name}</h4>
          }
        </div>
      </Link>
    </div>
  )
}

export default TvShowDetails;