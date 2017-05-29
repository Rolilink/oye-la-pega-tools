import * as Api from '../../../libs/api';
import { setDecksList, setDecksListIsFetching, setActiveDeck, setActiveDeckIsFetching } from './actions';

/*
  There is some common functionality in here that can be refactored,
  we have a common pattern where before a call something is done (set isFetching to true)
  and when resolved (set fetching status to false) maybe create an
  ApiActionDecorator(actionCreator,[beforeApiCall(dispatch)],[afterApiCall(dispatch)])
  and then do something like:
  ApiActionDecorator(
    fetchDeckList,
    (dispatch) => dispatch(setDecksListIsFetching(true)),
    (dispatch) => dispatch(setDecksListIsFetching(false))
  )
*/

export function fetchDeckList() {
  return (dispatch) => {
    dispatch(setDecksListIsFetching(true));

    return Api.getDeckList()
      .then((res) => {
        dispatch(setDecksListIsFetching(false));
        dispatch(setDecksList(res.body));
      });
  };
}

export function fetchAndSetActiveDeck(deckId) {
  return (dispatch) => {
    dispatch(setActiveDeckIsFetching(true));

    return Api.getDeck(deckId)
      .then((res) => {
        dispatch(setActiveDeckIsFetching(false));
        dispatch(setActiveDeck(res.body));
      });
  };
}

export function setDecksListFetchingStatus(isFetching) {
  return dispatch => dispatch(setDecksListIsFetching(isFetching));
}

export function setActiveDeckFetchingStatus(isFetching) {
  return dispatch => dispatch(setActiveDeckIsFetching(isFetching));
}
