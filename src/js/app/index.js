import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import newApp from './app';
import newRouter from './router';

const Router = newRouter();
const App = newApp({ Provider, store, Router });

ReactDOM.render(
  <div>{App}</div>
  ,
  document.getElementById('app'),
);
