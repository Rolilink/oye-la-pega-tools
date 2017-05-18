import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import { LoginView } from './components';


export default function notFoundRoutes(basePath) {
  return (
    <Route path={path.join(basePath, '/login')} render={() => <LoginView />} />
  );
}
