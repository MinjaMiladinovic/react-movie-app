import React, { Component } from 'react';
import APIService from '../../APIService';

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

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { singleMovie } = this.state;
    return (
      <div>
        <div className="container">
          <div className="col-md-12">
            <button className="btn btn-light text-dark btn-sm mt-3" onClick={this.goBack}><i className="fas fa-angle-left mr-1"></i>Back</button>
            <img src={`https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path}`} 
              className="img-fluid mt-4" 
              alt={`${singleMovie.title}`} 
            />
            <h1 className="display-4 mt-3 mb-3">{singleMovie.title}</h1>
            <h5>Movie overview</h5>
            <p>{singleMovie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}
