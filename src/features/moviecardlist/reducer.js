import { 
  FETCH_MOVIES_DISCOVER_REQUEST, 
  FETCH_MOVIES_DISCOVER_SUCCESS, 
  FETCH_MOVIES_DISCOVER_FAILURE
 } from './action';

export const discover = (state = { isFetching: false, items: [] }, action) => {
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
        items: action.results
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

