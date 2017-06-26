import React from 'react';
import path from 'path';
import { Route } from 'react-router-dom';
import { components } from './ui';
import { GAME_VIEW_PATH } from './constants';

const { GameView } = components;

export default function gameRoutes(basePath) {
  return (
    <Route path={path.join(basePath, GAME_VIEW_PATH, '/:deckId')} render={({ match }) => <GameView gameId={match.params.deckId} />} />
  );
}
