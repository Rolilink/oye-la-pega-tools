import { QUESTION_ANSWERED } from '../eventTypes';

export default function questionAnswered(question, answers, deck, tracker) {
  tracker(QUESTION_ANSWERED, { question, answers, deckId: deck.id });
}
