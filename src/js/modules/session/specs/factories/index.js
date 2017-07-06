export function createSession({
  id = 1,
  email = 'test@email.com',
  admin = true,
  accessToken = 'accessToken',
} = {}) {
  return { id, email, admin, accessToken };
}

export function createState({
  session = createSession(),
  isFetching = false,
  error = null,
} = {}) {
  return { session, isFetching, error };
}
