import api from '../../api'

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = query => ({
  type: FETCH_MOVIES_REQUEST,
  query
});

export const fetchMoviesSuccess = ({ data }) => ({
  type: FETCH_MOVIES_SUCCESS,
  items: data
});

export const fetchMoviesFailure = () => ({
  type: FETCH_MOVIES_FAILURE
})

export const searchMovies = query => dispatch => {
  dispatch(fetchMoviesRequest(query));

  return api.searchMovies(query)
      .then(data => dispatch(fetchMoviesSuccess(data)));
}
