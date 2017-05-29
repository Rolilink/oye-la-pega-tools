import joinUrl from 'url-join';
import superagent from 'superagent';
import { API_HOST, DECK_LIST_PATH } from '../constants';

export default function getDeckList(args = {}) {
  const { request = superagent, accessToken = '' } = args;

  return new Promise((resolve, reject) => {
    request
      .get(joinUrl(API_HOST, DECK_LIST_PATH))
      .withCredentials()
      .set('Authorization', `Bearer ${accessToken}`)
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res.body.access_token);
      });
  });
}
