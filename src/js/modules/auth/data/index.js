import { combineReducers } from 'redux';
import * as reducers from './reducers';
import actionTypes from './actionTypes';
import {
  loginWithEmailAndPassword,
  setAccessToken,
  setSession,
  destroySession,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export {
  reducer,
  actionTypes,
  loginWithEmailAndPassword,
  setAccessToken,
  setSession,
  destroySession,
};

export default reducer;
