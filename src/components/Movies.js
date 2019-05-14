import React, { Component } from 'react';
import APIService from '../APIService';
import { connect } from 'react-redux';

class Movies extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const { topMovies } = this.props;
    if (!topMovies.length) {
      APIService.getTopRatedMovies()
        .then(res => {
          this.loadPopularMovies(res.data)
        });
    }
  }

  loadPopularMovies = (data) => this.props.dispatch({ type: 'FETCH_TOP_RATED_MOVIE', data });

  renderMovies() {
    const { topMovies } = this.props;
    return topMovies.map(movie => {
      return (
        <div className="col-md-6" key={movie.id}>
          <div className="card mb-3">
          <h4 className="text-center">{movie.title}</h4>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderMovies()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topMovies: state.topMovies,
})

export default connect(mapStateToProps)(Movies);
