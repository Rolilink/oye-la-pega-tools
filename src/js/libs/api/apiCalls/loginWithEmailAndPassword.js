import joinUrl from 'url-join';
import superagent from 'superagent';
import { API_HOST, EMAIL_LOGIN_PATH } from '../constants';

export default function loginWithEmailAndPassword(args = {}) {
  const { request = superagent, email = '', password = '' } = args;

  return new Promise((resolve, reject) => {
    request
      .post(joinUrl(API_HOST, EMAIL_LOGIN_PATH))
      .withCredentials()
      .send({ email, password })
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res.body.access_token);
      });
  });
}
