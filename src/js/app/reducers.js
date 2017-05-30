import { combineReducers } from 'redux';
import { data as authData } from '../modules/auth';
import { data as decksData } from '../modules/decks';

export default combineReducers({ auth: authData.reducer, decks: decksData.reducer });
