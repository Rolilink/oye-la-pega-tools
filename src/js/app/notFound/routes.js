import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import NotFoundView from './components';


export default function notFoundRoutes(basePath) {
  return (
    <Route path={path.join(basePath, '/')} render={() => <NotFoundView />} />
  );
}
