import * as actionTypes from './actionTypes';
import * as Api from '../../../libs/api';
import getSessionFromJWT from '../../../libs/jwt';

export function setAccessToken(accessToken) {
  return {
    type: actionTypes.SET_ACCESS_TOKEN,
    accessToken,
  };
}

export function setSession(user) {
  return {
    type: actionTypes.SET_SESSION_USER,
    user,
  };
}

export function destroySession() {
  return {
    type: actionTypes.DESTROY_SESSION,
  };
}


export function loginWithEmailAndPassword(email, password) {
  return dispatch => (
    Api.loginWithEmailAndPassword(email, password)
      .then((accessToken) => {
        dispatch(setAccessToken(accessToken));
        getSessionFromJWT(accessToken)
          .then(session => dispatch(setSession(session)));
      })
  );
}
