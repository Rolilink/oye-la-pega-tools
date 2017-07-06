import * as actionTypes from './actionTypes';

export const initialSessionState = {
  session: null,
  isFetching: false,
  error: null,
};

export function session(state = initialSessionState, action) {
  switch (action.type) {
    case actionTypes.SET_SESSION:
      return { ...state, session: action.session };
    case actionTypes.SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.error };
    case actionTypes.DESTROY_SESSION:
      return initialSessionState;
    default:
      return state;
  }
}

export default {
  session,
};
