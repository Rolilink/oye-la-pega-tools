import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { routes as notFoundRoutes } from './notFound';

export default function createRouter() {
  return (
    <Router>
      <Switch>
        {notFoundRoutes('/')}
      </Switch>
    </Router>
  );
}
