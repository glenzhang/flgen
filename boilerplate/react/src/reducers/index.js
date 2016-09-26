import problems from './problems';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const finalReducers = combineReducers({
  problems,
  routing: routerReducer
});

export default finalReducers;
