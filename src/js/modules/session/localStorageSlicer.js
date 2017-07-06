import { initialState } from './data/reducers';

// Slicer function used to persist sub paths of the auth state on local storage.
// https://github.com/elgerlambert/redux-localstorage#configslicer
export default function authSlicer() {
  return state => ({
    ...initialState,
    auth: {
      ...initialState.auth,
      session: state.session.auth,
    },
  });
}
