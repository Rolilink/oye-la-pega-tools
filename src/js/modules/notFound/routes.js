import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import NotFoundView from './ui/components/NotFoundView';


export default function notFoundRoutes(basePath) {
  return (
    <Route path={path.join(basePath, '/')} render={() => <NotFoundView />} />
  );
}
