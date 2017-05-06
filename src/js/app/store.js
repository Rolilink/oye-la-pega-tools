import { createStore, applyMiddleware } from 'redux';

function newStore({ rootReducer = () => {}, middleware = [] }) {
  return createStore(rootReducer, applyMiddleware(...middleware));
}

export default newStore;
