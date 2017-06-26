import _ from 'lodash';
import {
  SET_REQUIRED_ANSWERS,
  SET_ACTIVE_DECK_ID,
  SET_QUESTION,
  SET_ANSWERS,
  ADD_ROUND_TO_HISTORY,
  INITIALIZE_ROUND,
} from './actionTypes';

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

export function setNewRound() {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { decks } = getState();
      const { activeDeck } = decks;
      const { deck } = activeDeck;
      const answers = _.sampleSize(deck.answers, 9);
      const question = _.sample(deck.questions);
      const requiredAnswers = question.answers;

      dispatch(initializeRound());
      dispatch(setActiveDeckId(deck.id));
      dispatch(setQuestion(question));
      dispatch(setRequiredAnswers(requiredAnswers));
      dispatch(setAnswers(answers));

      resolve({ deck, question, answers, requiredAnswers });
    })
  );
}

export function pickWinners(winnerAnswers) {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { game } = getState();
      const { round } = game;
      const roundToAdd = { ...round, winnerAnswers };

      dispatch(addRoundToHistory(roundToAdd));

      resolve({ winnerAnswers, round });
    })
  );
}

export function markAllAnswersAsBoring() {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { game } = getState();
      const { round } = game;
      const boringAnswers = round.answers;
      const roundToAdd = { ...round, boringAnswers };

      dispatch(addRoundToHistory(roundToAdd));

      resolve({ boringAnswers, round });
    })
  );
}
