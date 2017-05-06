import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { routes as notFoundRoutes } from './notFound';
import { routes as authRoutes } from './auth';

export default function createRouter() {
  return (
    <Router>
      <Switch>
        {authRoutes('')}
        {notFoundRoutes('')}
      </Switch>
    </Router>
  );
}
