import api from '../../api'

export const FETCH_MOVIES_DISCOVER_REQUEST = 'FETCH_MOVIES_DISCOVER_REQUEST';
export const FETCH_MOVIES_DISCOVER_SUCCESS = 'FETCH_MOVIES_DISCOVER_SUCCESS';
export const FETCH_MOVIES_DISCOVER_FAILURE = 'FETCH_MOVIES_DISCOVER_FAILURE';

export const fetchMoviesDiscoverRequest = () => ({
  type: FETCH_MOVIES_DISCOVER_REQUEST
});

export const fetchMoviesDiscoverSuccess = (data) => ({
  type: FETCH_MOVIES_DISCOVER_SUCCESS,
  data
});

export const fetchMoviesDiscoverFailure = (error) => ({
  type: FETCH_MOVIES_DISCOVER_FAILURE,
  error
})

export const discoverMovies = () => dispatch => {
  dispatch(fetchMoviesDiscoverRequest());

  return api.discoverMovies()
      .then(data => dispatch(fetchMoviesDiscoverSuccess(data)));
}