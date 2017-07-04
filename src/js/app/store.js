import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { slicer as authSlicer } from '../modules/auth';
import rootReducer from './reducers';

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  compose(middlewares, persistState('auth', { key: 'OYLP_AUTH', authSlicer })),
);

export default store;
