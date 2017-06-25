const SET_ACTIVE_DECK_ID = 'oye-la-pega-tools/game/SET_ACTIVE_DECK_ID';
const SET_QUESTION = 'oye-la-pega-tools/game/SET_QUESTION';
const SET_ANSWERS = 'oye-la-pega-tools/game/SET_ANSWERS';
const ADD_ROUND_TO_HISTORY = 'oye-la-pega-tools/game/ADD_ROUND_TO_HISTORY';
const INITIALIZE_ROUND = 'oye-la-pega-tools/game/INITIALIZE_ROUND';
const SET_REQUIRED_ANSWERS = 'oye-la-pega-tools/game/SET_REQUIRED_ANSWERS';

export function setRequiredAnswers(requiredAnswers) {
  return {
    type: SET_REQUIRED_ANSWERS,
    requiredAnswers,
  };
}

export function setActiveDeckId(deckId) {
  return {
    type: SET_ACTIVE_DECK_ID,
    deckId,
  };
}

export function setQuestion(question) {
  return {
    type: SET_QUESTION,
    question,
  };
}

export function setAnswers(answers) {
  return {
    type: SET_ANSWERS,
    answers,
  };
}

export function addRoundToHistory(round) {
  return {
    type: ADD_ROUND_TO_HISTORY,
    round,
  };
}

export function initializeRound() {
  return {
    type: INITIALIZE_ROUND,
  };
}

export const actionTypes = {
  SET_ACTIVE_DECK_ID,
  SET_QUESTION,
  SET_ANSWERS,
  ADD_ROUND_TO_HISTORY,
  INITIALIZE_ROUND,
  SET_REQUIRED_ANSWERS,
};
