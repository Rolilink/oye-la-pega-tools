import { ANSWER_NOT_SELECTED_WINNER } from '../eventTypes';

export default function questionAnswered(question, answer, deckId, tracker) {
  tracker(ANSWER_NOT_SELECTED_WINNER, { question, answer, deckId });
}
