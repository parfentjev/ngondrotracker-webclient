import UserToken from '../models/UserToken';
import { HttpMethod } from '../models/HttpMethod';
import { httpRequest } from './util/http-utils';
import HttpRequest from '../models/HttpRequest';

const authenticate = async (
  endpoint: string,
  email: string,
  password: string
): Promise<UserToken> => {
  const request = new HttpRequest(endpoint, HttpMethod.POST);
  request.body = {
    email: email,
    password: password,
  };

  const data = await httpRequest(request);

  return new UserToken(data.result.token, data.result.expirationDate, data.result.roles);
};

export const signup = async (requestData: {
  email: string;
  password: string;
}): Promise<UserToken> => {
  return await authenticate(
    '/user/signup',
    requestData.email,
    requestData.password
  );
};

export const signin = async (requestData: {
  email: string;
  password: string;
}): Promise<UserToken> => {
  return await authenticate(
    '/user/signin',
    requestData.email,
    requestData.password
  );
};

export const refreshToken = async (requestData: {
  token: UserToken;
}): Promise<UserToken> => {
  const request = new HttpRequest('/user/refreshToken', HttpMethod.GET);
  request.token = requestData.token;

  const data = await httpRequest(request);

  return new UserToken(data.result.token, data.result.expirationDate, data.result.roles);
};
