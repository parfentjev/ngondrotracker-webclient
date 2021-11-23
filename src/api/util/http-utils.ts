import { HttpMethod } from '../../models/HttpMethod';
import HttpRequest from '../../models/HttpRequest';

const DOMAIN = 'http://localhost:8080';

export const httpRequest = async (params: HttpRequest) => {
  let headers = { 'Content-Type': 'application/json' };
  console.log(params.token);
  if (params.token) headers['Authorization'] = 'Bearer ' + params.token.token;

  return fetch(DOMAIN + params.endpoint, {
    headers: headers,
    method: HttpMethod[params.method],
    body: params.body ? JSON.stringify(params.body) : null,
  })
    .then((response) => {
      if (!response.ok) throw new Error();

      return response.json();
    })
    .then((data) => {
      return data;
    });
};
