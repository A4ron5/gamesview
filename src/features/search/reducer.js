import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE
 } from './action';

export const movies = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items
      }
    case FETCH_MOVIES_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}
