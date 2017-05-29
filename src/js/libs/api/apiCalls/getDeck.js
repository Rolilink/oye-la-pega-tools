import joinUrl from 'url-join';
import superagent from 'superagent';
import { API_HOST, DECK_GET_PATH } from '../constants';

export default function getDeck(args = {}) {
  const {
    request = superagent,
    deckId = '',
    accessToken = '',
  } = args;

  return new Promise((resolve, reject) => {
    request
      .get(joinUrl(API_HOST, DECK_GET_PATH, `/${deckId}.json`))
      .withCredentials()
      .set('authorization', `Bearer ${accessToken}`)
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res.body.access_token);
      });
  });
}
