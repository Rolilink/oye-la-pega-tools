import { combineReducers } from 'redux';
import { data as authData } from '../modules/auth';
import { data as decksData } from '../modules/decks';
import { data as gameData } from '../modules/game';

export default combineReducers({
  auth: authData.reducer,
  decks: decksData.reducer,
  game: gameData.reducer,
});
