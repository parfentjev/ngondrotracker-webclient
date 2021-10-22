import UserToken from '../models/UserToken';

const DOMAIN = 'http://localhost:8080';

const fetchAuthenticationEndpoint = async (
  endpoint: string,
  email: string,
  password: string
) => {
  return fetch(DOMAIN + endpoint, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('sign up error');

      return response.json();
    })
    .then((data) => {
      return new UserToken(data.result.token, data.result.expirationDate);
    });
};

export const userSignup = async (request: {
  email: string;
  password: string;
}) => {
  return await fetchAuthenticationEndpoint(
    '/user/signup',
    request.email,
    request.password
  );
};

export const userSignin = async (request: {
  email: string;
  password: string;
}) => {
  return await fetchAuthenticationEndpoint(
    '/user/signin',
    request.email,
    request.password
  );
};
