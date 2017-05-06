import React from 'react';
import { Route } from 'react-router-dom';
import NotFoundView from './components';

export default function notFoundRoutes(path) {
  return (
    <Route path={`${path}`} render={() => <NotFoundView />} />
  );
}
