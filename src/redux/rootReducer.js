import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { loadReducer } from './loadReducer';

export const rootReducer = combineReducers({
  newsReducer,
  loadReducer,
});
