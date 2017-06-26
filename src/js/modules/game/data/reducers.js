import {
  SET_ACTIVE_DECK_ID,
  SET_QUESTION,
  SET_ANSWERS,
  SET_REQUIRED_ANSWERS,
  INITIALIZE_ROUND,
  ADD_ROUND_TO_HISTORY,
} from './actionTypes';

const gameInitialState = {
  round: {
    deckId: null,
    answers: [],
    question: {},
    requiredAnswers: 0,
    winnerAnswers: [],
  },
  history: {
    rounds: [],
  },
};

export function round(state = gameInitialState.round, action) {
  switch (action.type) {
    case SET_ACTIVE_DECK_ID:
      return { ...state, deckId: action.deckId };
    case SET_QUESTION:
      return { ...state, question: action.question };
    case SET_ANSWERS:
      return { ...state, answers: action.answers };
    case SET_REQUIRED_ANSWERS:
      return { ...state, requiredAnswers: action.requiredAnswers };
    case INITIALIZE_ROUND:
      return gameInitialState.round;
    default:
      return state;
  }
}

export function history(state = gameInitialState.history, action) {
  switch (action.type) {
    case ADD_ROUND_TO_HISTORY:
      return { ...state, rounds: [...state.rounds, action.round] };
    default:
      return state;
  }
}
