import joinUrl from 'url-join';
import superagent from 'superagent';
import { API_HOST, EMAIL_LOGIN_PATH } from '../constants';

export default function loginWithEmailAndPassword(email = '', password = '', request = superagent) {
  return new Promise((resolve, reject) => {
    request
      .post(joinUrl(API_HOST, EMAIL_LOGIN_PATH))
      .send({ email, password })
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res.body.access_token);
      });
  });
}
