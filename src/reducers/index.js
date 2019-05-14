import { combineReducers } from 'redux';
import topRatedMovies from './movie_reducer';

const rootReducer = combineReducers({
  topMovies: topRatedMovies
  // state: (state = {}) => state
});

export default rootReducer;