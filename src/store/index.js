import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { discover } from '../features/moviecardlist'
import { movies } from '../features/search'

const rootReducer = combineReducers({discover, movies})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
