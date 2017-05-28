/*
 * Decks Feature
 */
import { combineReducers } from 'redux';
import components from './components';
import containers from './containers';
import { actionTypes, actions } from './actions';
import actionCreators from './actionsCreators';
import * as reducers from './reducers';

// Combine reducers into a single root reducer
const rootReducer = combineReducers(reducers);

export default rootReducer;
export { components, containers, actionTypes, actions, actionCreators };
