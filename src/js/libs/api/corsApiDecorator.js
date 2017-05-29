import defaults from 'superagent-defaults';

export default function decorateApiCall(apiCall) {
  return (...rArgs) => {
    const request = defaults();

    request.withCredentials();

    const args = [...rArgs, request];

    return apiCall(...args);
  };
}
