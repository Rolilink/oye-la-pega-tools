import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { actionTypes as actions } from './actions';
import {
  setNewRound,
  setGame,
  pickWinners,
  markAllAnswersAsBoring,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export {
  reducer,
  actions,
  setNewRound,
  setGame,
  pickWinners,
  markAllAnswersAsBoring,
};

export default reducer;
