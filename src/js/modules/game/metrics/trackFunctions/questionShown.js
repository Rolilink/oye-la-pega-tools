import { QUESTION_SHOWN } from '../eventTypes';

export default function questionShown(question, deck, tracker) {
  tracker(QUESTION_SHOWN, { question, deckId: deck.id });
}
