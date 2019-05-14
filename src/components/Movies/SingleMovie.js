import React, { Component } from 'react';
import APIService from '../../APIService';
import { Link } from 'react-router-dom';

export default class SingleMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleMovie: {}
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.getSingleMovie(id)
  };

  getSingleMovie() {
    const { id } = this.props.match.params;
    APIService.getMoviesById(id)
      .then(res => this.setState({ singleMovie: res.data }))
  }

  render() {
    const { singleMovie } = this.state;
    return (
      <div>
        <div className="container">
          <div className="col-md-12">
            <h4><Link to="/">Back</Link></h4>
            <img src={`https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path}`} className="img-fluid" alt="" />
            <h4>{singleMovie.title}</h4>
            <h5>Movie overview</h5>
            <p>{singleMovie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}
