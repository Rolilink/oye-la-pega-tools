import { join as joinUrl } from 'path';
import superagent from 'superagent';
import {
  API_HOST,
  EMAIL_LOGIN_PATH,
} from '../../app/constants';

class API {
  constructor(request) {
    this.request = request;
  }

  loginWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      this.request
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
}

// Create API receives request as a dependency so we can mock and decorate the http client
export default function createAPI(dependencies = {}) {
  const request = dependencies.request || superagent;

  return new API(request);
}
