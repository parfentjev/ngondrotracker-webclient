import { HttpMethod } from '../../models/HttpMethod';
import HttpRequest from '../../models/HttpRequest';

const REST_SERVER_URL = 'http://localhost:8080';

export const httpRequest = async (params: HttpRequest) => {
  let headers = { 'Content-Type': 'application/json' };

  if (params.token) headers['Authorization'] = 'Bearer ' + params.token.token;

  const response = await fetch(REST_SERVER_URL + params.endpoint, {
    headers: headers,
    method: HttpMethod[params.method],
    body: params.body ? JSON.stringify(params.body) : null,
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
