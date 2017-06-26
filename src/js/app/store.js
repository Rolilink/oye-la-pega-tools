import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  compose(middlewares, persistState('auth', { key: 'OYLP_AUTH' })),
);

export default store;
