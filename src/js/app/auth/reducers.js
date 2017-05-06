import { actionTypes } from './actions';

const initialSessionState = {
  accessToken: '',
  user: {},
};

export function session(state = initialSessionState, action) {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.accessToken };
    case actionTypes.SET_SESSION_USER:
      return { ...state, user: action.user };
    case actionTypes.DESTROY_SESSION:
      return initialSessionState;
    default:
      return state;
  }
}

export default {
  session,
};
