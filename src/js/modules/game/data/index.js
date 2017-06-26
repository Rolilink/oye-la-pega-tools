import { combineReducers } from 'redux';
import * as reducers from './reducers';
import actions from './actionTypes';
import {
  setNewRound,
  setGame,
  pickWinners,
  markAllAnswersAsBoring,
  setRequiredAnswers,
  setActiveDeckId,
  setQuestion,
  setAnswers,
  addRoundToHistory,
  initializeRound,
} from './actionCreators';

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
