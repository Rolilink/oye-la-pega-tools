import * as actionTypes from './actionTypes';

export function setIsFetching(isFetching) {
  return {
    type: actionTypes.SET_IS_FETCHING,
    isFetching,
  };
}

export function setSession(session) {
  return {
    type: actionTypes.SET_SESSION_USER,
    session,
  };
}

export function setError(error) {
  return {
    type: actionTypes.SET_ERROR,
    error,
  };
}

export function destroySession() {
  return {
    type: actionTypes.DESTROY_SESSION,
  };
}


export function loginWithEmailAndPassword(
  email,
  password,
  Api,
  getSessionFromJWT,
) {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    return Api.loginWithEmailAndPassword(email, password)
      .then((accessToken) => {
        dispatch(setIsFetching(false));
        getSessionFromJWT(accessToken)
          .then(session => dispatch(setSession(session)));
      })
      .catch(error => dispatch(setError(error)));
  };
}
