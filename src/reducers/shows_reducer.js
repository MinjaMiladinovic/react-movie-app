export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_TOP_RATED_SHOWS':
      return state.concat(action.data.results.slice(0, 10));

    default: return state;
  }
}