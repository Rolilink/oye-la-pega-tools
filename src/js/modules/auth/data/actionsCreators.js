import { setAccessToken, setSession } from './actions';
import * as Api from '../../../libs/api';
import getSessionFromJWT from '../../../libs/jwt';

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
