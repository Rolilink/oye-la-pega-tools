const SET_ACTIVE_DECK_ID = 'oye-la-pega-tools/game/SET_ACTIVE_DECK_ID';
const SET_QUESTION = 'oye-la-pega-tools/game/SET_QUESTION';
const SET_ANSWERS = 'oye-la-pega-tools/game/SET_ANSWERS';
const ADD_ROUND_TO_HISTORY = 'oye-la-pega-tools/game/ADD_ROUND_TO_HISTORY';

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

export const actionTypes = {
  SET_ACTIVE_DECK_ID,
  SET_QUESTION,
  SET_ANSWERS,
  ADD_ROUND_TO_HISTORY,
};
