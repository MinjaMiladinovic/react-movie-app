import React, { Component } from 'react';
import APIService from '../../APIService';

class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleShow: {}
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.getSingleShow(id)
  };

  getSingleShow() {
    const { id } = this.props.match.params;
    APIService.getShowsById(id)
      .then(res => this.setState({ singleShow: res.data }))
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { singleShow } = this.state;
    return (
      <div className="container">
        <div className="col-md-12">
          <button className="btn btn-light text-dark btn-sm mt-3" onClick={this.goBack}><i className="fas fa-angle-left mr-1"></i>Back</button>
            <img src={`https://image.tmdb.org/t/p/original/${singleShow.backdrop_path}`} 
              className="img-fluid mt-4" 
              alt={`${singleShow.name}`} 
            />
            <h1 className="display-4 mt-3 mb-3">{singleShow.name}</h1>
            <h5>TV Show overview</h5>
            <p>{singleShow.overview}</p>
        </div>
      </div>
    )
  }
}

export default SingleShow;
