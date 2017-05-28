import { combineReducers } from 'redux';
import { reducer as authReducer } from '../modules/auth';

export default combineReducers({ auth: authReducer });
