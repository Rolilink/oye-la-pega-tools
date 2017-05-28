import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { actionTypes as actions } from './actions';
import {
  loginWithEmailAndPassword,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export { reducer, actions, loginWithEmailAndPassword };
export default reducer;
