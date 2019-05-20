import React, { Component } from 'react';
import APIService from '../../APIService';
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../style.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchedMovies: []
    }
  }

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

  loadPopularMovies = (data) => this.props.dispatch({ type: 'FETCH_TOP_RATED_MOVIES', data });

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.callSearchedMovies()
    }
  }

  callSearchedMovies() {
    const { searchTerm } = this.state
    const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
    const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&include_adult=false`;

    axios.get(SEARCH_MOVIE)
      .then(res => {
        this.setState({ searchedMovies: res.data.results.slice(0, 3) })
      })
  }

  renderMovies() {
    const { topMovies } = this.props;
    return topMovies.map((movie, i) =>
      <MovieDetails
        key={i}
        movie={movie}
      />
    );
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchedMovies() {
    const { searchedMovies } = this.state;
    return searchedMovies.map((movie) => {
      return (
        <div className="col-md-6 col-sm-12" key={movie.id}>
          <Link to={`/movieDetails/${movie.id}`}>
            <div className="text-center mb-3 border border-dark">
              {movie.backdrop_path &&
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={`${movie.title}`}
                />
              }
              <h4 className="text-center mt-3">{movie.title}</h4>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    const { topMovies } = this.props;
    const { searchTerm } = this.state;
    return (
      <div className="container">
        <Link className={topMovies ? 'btn btn-light text-dark btn-sm mt-3 active' : 'btn btn-light text-dark btn-sm mt-3 mr-3'} to="/movies">Movies</Link>
        <Link className="btn btn-light text-dark btn-sm mt-3 mr-3 mt-3" to="/shows">TV Shows</Link>

        <div className="mt-3">
          <input
            onChange={this.onHandleChange}
            name="searchTerm"
            type="text"
            placeholder="Search..."
            className="form-control" />
        </div>

        <div className="row mt-3">
          {
            searchTerm.length >= 3 ?
              this.searchedMovies()
              :
              this.renderMovies()
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topMovies: state.topMovies,
})

export default connect(mapStateToProps)(Movies);
