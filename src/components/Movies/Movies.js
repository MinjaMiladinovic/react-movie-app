import React, { Component } from 'react';
import APIService from '../../APIService';
import { connect } from 'react-redux';
import MovieItems from './MovieItems';
import { Link } from 'react-router-dom'
import "../../style.css";

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
    return topMovies.map((movie, i) =>
      <MovieItems
        key={i}
        movie={movie}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <Link className="btn btn-light text-dark btn-sm mt-3 mr-3 active" to="/movies">Movies</Link>
        <Link className="btn btn-light text-dark btn-sm mt-3" to="/shows">TV Shows</Link>
        <div className="row mt-4">
          {this.renderMovies()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topMovies: state.topMovies,
})

export default connect(mapStateToProps)(Movies);
