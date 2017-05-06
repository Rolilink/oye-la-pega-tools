import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import newStore from './store';
import newApp from './app';
import newRouter from './router';

const store = newStore({ rootReducer, middleware: [thunk, logger] });
const Router = newRouter();
const App = newApp({ Provider, store, Router });

ReactDOM.render(
  <div>{App}</div>
  ,
  document.getElementById('app'),
);
