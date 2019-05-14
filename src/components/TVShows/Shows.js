import React, { Component } from 'react';
import APIService from '../../APIService';
import ShowItem from './ShowItem'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import "../../style.css";

class Shows extends Component {
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

  renderShows() {
    const { topShows } = this.props;
    return topShows.map((show, i) =>
      <ShowItem
        key={i}
        show={show}
      />
    );

  }

  render() {
    return (
      <div className="container">
        <Link className="btn btn-light text-dark btn-sm mt-3 mr-3" to="/movies">Movies</Link>
        <Link className="btn btn-light text-dark btn-sm mt-3 active" to="/shows">TV Shows</Link>
        <div className="row mt-4">
          {this.renderShows()}
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  topShows: state.topShows,
});

export default connect(mapStateToProps)(Shows);
