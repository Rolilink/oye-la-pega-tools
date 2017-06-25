import defaults from 'superagent-defaults';
import _ from 'lodash';
import { store } from '../../../app';

export default function decorateApiCall(apiCall) {
  return (...rArgs) => {
    const { auth } = store.getState();
    const { session } = auth;
    const { accessToken } = session;
    const request = defaults();

    if (_.isEmpty(accessToken)) {
      return new Promise((resolve, reject) => reject('No Access Token'));
    }

    request
      .withCredentials()
      .set('authorization', `Bearer ${accessToken}`);

    const args = [...rArgs, request];

    return apiCall(...args);
  };
}
