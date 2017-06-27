import { ANSWER_SELECTED_WINNER } from '../eventTypes';

export default function questionAnswered(answer, question, deckId, tracker) {
  tracker(ANSWER_SELECTED_WINNER, { question, answer, deckId });
}
