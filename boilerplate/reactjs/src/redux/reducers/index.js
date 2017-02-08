import home from './home';
import faxian from './faxian';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const finalReducers = combineReducers({
  routing: routerReducer,
  /*增加的reducer*/
  home,
  faxian
});

export default finalReducers;
