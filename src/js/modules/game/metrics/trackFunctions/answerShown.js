import { ANSWER_SHOWN } from '../eventTypes';

export default function answerShown(answer, deck, tracker) {
  tracker(ANSWER_SHOWN, { answer, deckId: deck.id });
}
