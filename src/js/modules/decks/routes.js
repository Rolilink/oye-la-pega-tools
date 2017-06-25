import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import DeckListView from './ui/components/DeckListView';
import { DECKS_VIEW_PATH } from './constants';

export default function decksRoutes(basePath) {
  return (
    <Route path={path.join(basePath, DECKS_VIEW_PATH)} render={() => <DeckListView />} />
  );
}
