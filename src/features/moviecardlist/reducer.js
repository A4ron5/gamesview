import { 
  FETCH_MOVIES_DISCOVER_REQUEST, 
  FETCH_MOVIES_DISCOVER_SUCCESS, 
  FETCH_MOVIES_DISCOVER_FAILURE
 } from './action';

export const discover = (state = { isFetching: false, discoverData: [] }, action) => {
  switch(action.type) {
    case FETCH_MOVIES_DISCOVER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_MOVIES_DISCOVER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        discoverData: action.data.data.results
      }
    case FETCH_MOVIES_DISCOVER_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

