import React from 'react';
import { Link } from 'react-router-dom';
import "../../style.css";

const ShowItems = (props) => {
  return (
    <div className="col-md-6 col-sm-12">
      <Link to={`/singleShow/${props.show.id}`}>
        <div className="text-center mb-3 border border-dark">
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/original/${props.show.backdrop_path}`}
            alt={`${props.show.name}`}
            />
          <h4 className="text-center mt-3">{props.show.name}</h4>
        </div>
      </Link>

    </div>
  )
}

export default ShowItems;