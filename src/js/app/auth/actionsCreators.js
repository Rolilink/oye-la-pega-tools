import { setAccessToken, setSession } from './actions';
import Api from '../../lib/api';
import getSessionFromJWT from '../../lib/jwt';

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

export default loginWithEmailAndPassword;
