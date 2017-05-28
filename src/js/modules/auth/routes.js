import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import LoginView from './ui/components/LoginView';

export default function authRoutes(basePath) {
  return (
    <Route path={path.join(basePath, '/login')} render={() => <LoginView />} />
  );
}
