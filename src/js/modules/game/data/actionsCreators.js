import _ from 'lodash';
import { setActiveDeckId, setQuestion, setAnswers, addRoundToHistory, setRequiredAnswers, initializeRound } from './actions';

export function setNewRound() {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { activeDeck } = getState();
      const { deck } = activeDeck;
      const answers = _.sampleSize(deck.answers, 10);
      const question = _.sample(deck.question);
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

export function pickWinnersAndStartNewRound(winnerAnswers) {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { game } = getState();
      const { round } = game;
      const roundToAdd = { ...round, winnerAnswers };

      dispatch(addRoundToHistory(roundToAdd));
      setNewRound();

      resolve({ winnerAnswers, round });
    })
  );
}

export function markAllAnswersAsBoringAndStartNewRound() {
  return (dispatch, getState) => (
    new Promise((resolve) => {
      const { game } = getState();
      const { round } = game;
      const boringAnswers = round.answers;
      const roundToAdd = { ...round, boringAnswers };

      dispatch(addRoundToHistory(roundToAdd));
      setNewRound();

      resolve({ boringAnswers, round });
    })
  );
}
