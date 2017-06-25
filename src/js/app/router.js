import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { routes as notFoundRoutes } from '../modules/notFound';
import { routes as authRoutes } from '../modules/auth';
import { routes as deckRoutes } from '../modules/decks';
import { routes as gameRoutes } from '../modules/game';

export default function createRouter() {
  return (
    <Router>
      <Switch>
        {authRoutes('/auth')}
        {deckRoutes('/decks')}
        {gameRoutes('/games')}
        {notFoundRoutes('')}
      </Switch>
    </Router>
  );
}
