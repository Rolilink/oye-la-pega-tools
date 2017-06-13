import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { actionTypes as actions } from './actions';
import {
  setNewRound,
  setGame,
  pickWinnersAndStartNewRound,
  markAllQuestionsAsBoringAndStartNewRound,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export {
  reducer,
  actions,
  setNewRound,
  setGame,
  pickWinnersAndStartNewRound,
  markAllQuestionsAsBoringAndStartNewRound,
};

export default reducer;
