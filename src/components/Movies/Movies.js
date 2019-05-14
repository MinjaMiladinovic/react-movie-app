import React, { Component } from 'react';
import APIService from '../../APIService';
import { connect } from 'react-redux';
import MovieItems from './MovieItems';
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
    console.log(this.props.topMovies)
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
