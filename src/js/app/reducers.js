import { combineReducers } from 'redux';
import { data } from '../modules/auth';

export default combineReducers({ auth: data.reducer });
