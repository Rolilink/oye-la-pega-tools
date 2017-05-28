import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import LoginView from './ui/components/LoginView';
import { LOGIN_VIEW_PATH } from './constants';

export default function authRoutes(basePath) {
  return (
    <Route path={path.join(basePath, LOGIN_VIEW_PATH)} render={() => <LoginView />} />
  );
}
