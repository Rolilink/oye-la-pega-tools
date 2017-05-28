import decode from 'jwt-decode';

// Wrap this in a promise to catch errors
export default function getSessionFromJWT(jwt) {
  return new Promise((resolve, reject) => {
    const session = decode(jwt);

    resolve(session);
  });
}
