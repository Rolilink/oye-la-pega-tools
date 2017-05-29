import { actionTypes } from './actions';

const decksInitialState = {
  decksList: {
    isFetching: false,
    list: [],
  },
  activeDeck: {
    isFetching: false,
    deck: {},
  },
};

export function decksList(state = decksInitialState.decksList, action) {
  switch (action.type) {
    case actionTypes.SET_DECKS_LIST:
      return { ...state, list: action.decks };
    case actionTypes.SET_DECKS_LIST_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
}

export function activeDeck(state = decksInitialState.activeDeck, action) {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_DECK:
      return { ...state, deck: action.deck };
    case actionTypes.SET_ACTIVE_DECK_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
}
