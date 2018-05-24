import { combineReducers } from 'redux'
import filters from './filters.js'

const taskApp = combineReducers({
  filters,
});

export default taskApp;
