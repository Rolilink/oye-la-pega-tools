import getDeckListCall from './apiCalls/getDeckList';
import loginWithEmailAndPasswordCall from './apiCalls/loginWithEmailAndPassword';
import getDeckCall from './apiCalls/getDeck';
import authApiDecorator from './decorators/authApiDecorator';
import corsApiDecorator from './decorators/corsApiDecorator';

const getDeck = authApiDecorator(getDeckCall);
const getDeckList = authApiDecorator(getDeckListCall);
const loginWithEmailAndPassword = corsApiDecorator(loginWithEmailAndPasswordCall);

export {
  loginWithEmailAndPassword,
  getDeck,
  getDeckList,
};
