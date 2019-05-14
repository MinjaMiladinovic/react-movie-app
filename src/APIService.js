import axios from 'axios';

// Api key
const API_KEY = 'b6ae17c5481c2abdc5c03bc07d7186e7';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
const TV_SHOW_URL = 'https://api.themoviedb.org/3/tv/';

// MOVIES
// Top rated movies
const TOP_RATED_MOVIES = `${MOVIE_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`

// TV SHOWS
// Top top rated tv-shows
const TOP_RATED_TV_SHOWS = `${TV_SHOW_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`

export default {
  getTopRatedMovies() {
    return axios({
      method: "GET",
      url: TOP_RATED_MOVIES
    })
  },
  getMoviesById(id) {
    return axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    })
  },
  
  // TV SHOWS
  getTopRatedTvShows() {
    return axios({
      method: "GET",
      url: TOP_RATED_TV_SHOWS
    })
  },
  getShowsById(id) {
    return axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&page=1`
    })
  },
}