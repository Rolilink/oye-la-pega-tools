import getDeckListCall from './apiCalls/getDeckList';
import loginWithEmailAndPasswordCall from './apiCalls/loginWithEmailAndPassword';
import getDeckCall from './apiCalls/getDeck';
import authApiDecorator from './authApiDecorator';
import corsApiDecorator from './corsApiDecorator';

const getDeck = authApiDecorator(getDeckCall);
const getDeckList = authApiDecorator(getDeckListCall);
const loginWithEmailAndPassword = corsApiDecorator(loginWithEmailAndPasswordCall);

export {
  loginWithEmailAndPassword,
  getDeck,
  getDeckList,
};
