import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { actionTypes as actions } from './actions';
import {
  fetchDecksList,
  setDecksListFetchingStatus,
  fetchAndSetActiveDeck,
  setActiveDeckFetchingStatus,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export {
  reducer,
  actions,
  fetchDecksList,
  fetchAndSetActiveDeck,
  setDecksListFetchingStatus,
  setActiveDeckFetchingStatus,
};

export default reducer;
