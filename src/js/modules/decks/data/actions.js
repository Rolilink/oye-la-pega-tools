const SET_DECKS_LIST = 'oye-la-pega-tools/decks/SET_LIST';
const SET_DECKS_LIST_IS_FETCHING = 'oye-la-pega-tools/decks/SET_LIST_IS_FETCHING';
const SET_ACTIVE_DECK = 'oye-la-pega-tools/decks/SET_ACTIVE_DECK';
const SET_ACTIVE_DECK_IS_FETCHING = 'oye-la-pega-tools/decks/SET_ACTIVE_DECK_IS_FETCHING';

export function setDecksList(decks) {
  return {
    type: SET_DECKS_LIST,
    decks,
  };
}

export function setActiveDeck(deck) {
  return {
    type: SET_ACTIVE_DECK,
    deck,
  };
}

export function setDecksListIsFetching(isFetching) {
  return {
    type: SET_DECKS_LIST_IS_FETCHING,
    isFetching,
  };
}

export function setActiveDeckIsFetching(isFetching) {
  return {
    type: SET_ACTIVE_DECK_IS_FETCHING,
    isFetching,
  };
}

export const actionTypes = {
  SET_DECKS_LIST,
  SET_DECKS_LIST_IS_FETCHING,
  SET_ACTIVE_DECK,
  SET_ACTIVE_DECK_IS_FETCHING,
};
