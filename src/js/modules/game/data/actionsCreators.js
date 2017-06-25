import _ from 'lodash';
import { setActiveDeckId, setQuestion, setAnswers, addRoundToHistory, setRequiredAnswers } from './actions';

export function setNewRound() {
  return (dispatch, getState) => {
    const { activeDeck } = getState();
    const { deck } = activeDeck;
    const answers = _.sampleSize(deck.answers, 10);
    const question = _.sample(deck.question);

    dispatch(setQuestion(question));
    dispatch(setRequiredAnswers(question.answers));
    dispatch(setAnswers(answers));
  };
}

export function setGame() {
  return (dispatch, getState) => {
    const { activeDeck } = getState();
    const { deck } = activeDeck;

    dispatch(setActiveDeckId(deck.id));
    setNewRound();
  };
}

export function pickWinnersAndStartNewRound(winnerAnswers) {
  return (dispatch, getState) => {
    const { game } = getState();
    const { round } = game;
    const roundToAdd = { ...round, winnerAnswers };

    dispatch(addRoundToHistory(roundToAdd));
    setNewRound();
  };
}

export function markAllQuestionsAsBoringAndStartNewRound() {
  return (dispatch, getState) => {
    const { game } = getState();
    const { round } = game;
    const roundToAdd = { ...round, boringAnswers: round.answers };

    dispatch(addRoundToHistory(roundToAdd));
    setNewRound();
  };
}
