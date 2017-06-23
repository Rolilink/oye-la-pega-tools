import { actionTypes } from './actions';

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
    case actionTypes.SET_ACTIVE_DECK_ID:
      return { ...state, deckId: action.deckId };
    case actionTypes.SET_QUESTION:
      return { ...state, question: action.question };
    case actionTypes.SET_ANSWERS:
      return { ...state, answers: action.answers };
    case actionTypes.INITIALIZE_ROUND:
      return gameInitialState.round;
    default:
      return state;
  }
}

export function history(state = gameInitialState.history, action) {
  switch (action.type) {
    case actionTypes.ADD_ROUND_TO_HISTORY:
      return { ...state, rounds: [...state.rounds, action.round] };
    default:
      return state;
  }
}
