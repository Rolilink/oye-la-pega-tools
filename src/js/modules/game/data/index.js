import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { actionTypes as actions } from './actions';
import {
  setNewRound,
  setGame,
  pickWinnersAndStartNewRound,
  markAllAnswersAsBoringAndStartNewRound,
} from './actionsCreators';

const reducer = combineReducers(reducers);

export {
  reducer,
  actions,
  setNewRound,
  setGame,
  pickWinnersAndStartNewRound,
  markAllAnswersAsBoringAndStartNewRound,
};

export default reducer;
