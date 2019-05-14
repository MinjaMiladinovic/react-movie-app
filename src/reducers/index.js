import { combineReducers } from 'redux';
import topRatedMovies from './movie_reducer';
import topRatedShows from './shows_reducer';

const rootReducer = combineReducers({
  topMovies: topRatedMovies,
  topShows: topRatedShows
  // state: (state = {}) => state
});

export default rootReducer;