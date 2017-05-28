const SET_ACCESS_TOKEN = 'oye-la-pega-tools/auth/SET_ACCESS_TOKEN';
const SET_SESSION_USER = 'oye-la-pega-tools/auth/SET_SESSION_USER';
const DESTROY_SESSION = 'oye-la-pega-tools/auth/DESTROY_SESSION';

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
  };
}

export function setSession(user) {
  return {
    type: SET_SESSION_USER,
    user,
  };
}

export function destroySession() {
  return {
    type: DESTROY_SESSION,
  };
}


export const actionTypes = { SET_ACCESS_TOKEN, SET_SESSION_USER, DESTROY_SESSION };
