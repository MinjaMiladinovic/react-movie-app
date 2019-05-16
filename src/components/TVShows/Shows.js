import React, { Component } from 'react';
import APIService from '../../APIService';
import TVShowDetails from './TVShowDetails'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../style.css";

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchedTvShows: []
    }
  }

  componentDidMount() {
    this.getShows();
  }

  getShows() {
    const { topShows } = this.props;
    if (!topShows.length) {
      APIService.getTopRatedTvShows()
        .then(res => {
          this.loadPopularShows(res.data)
        });
    }
  }

  loadPopularShows = (data) => this.props.dispatch({ type: 'FETCH_TOP_RATED_SHOWS', data });

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.callSearchedShows()
    }
  }

  callSearchedShows() {
    const { searchTerm } = this.state
    const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
    const SEARCH_SHOW = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&include_adult=false`;

    axios.get(SEARCH_SHOW)
      .then(res => {
        this.setState({ searchedTvShows: res.data.results.slice(0, 2) })
      });
  }

  renderShows() {
    const { topShows } = this.props;
    return topShows.map((show, i) =>
      <TVShowDetails
        key={i}
        show={show}
      />
    );
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchedShows() {
    const { searchedTvShows } = this.state;
    return searchedTvShows.map((show) => {
      return (
        <div className="col-md-6 col-sm-12" key={show.id}>
          <Link to={`/tvShowDetails/${show.id}`}>
            <div className="text-center mb-3 border border-dark">
              {show.backdrop_path &&
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}
                  alt={`${show.name}`}
                />
              }
              <h4 className="text-center mt-3">{show.name}</h4>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    const { searchTerm } = this.state;
    const { topShows } = this.props;
    return (
      <div className="container">
        <Link className="btn btn-light text-dark btn-sm mt-3 mr-3" to="/movies">Movies</Link>
        <Link className={topShows ? "btn btn-light text-dark btn-sm mt-3 active" : ''} to="/shows">TV Shows</Link>
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
              this.searchedShows()
              :
              this.renderShows()
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  topShows: state.topShows,
});

export default connect(mapStateToProps)(Shows);
