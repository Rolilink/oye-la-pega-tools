/*
 * Authentication Feature
 */
import { combineReducers } from 'redux';
import * as ui from './ui';
import { actionTypes, actions } from './actions';
import actionCreators from './actionsCreators';
import * as reducers from './reducers';
import routes from './routes';

const reducer = combineReducers(reducers);

export { ui, actionTypes, actions, routes, actionCreators, reducer };
