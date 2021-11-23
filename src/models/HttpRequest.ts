import { HttpMethod } from './HttpMethod';
import UserToken from './UserToken';

class HttpRequest {
  endpoint: string;
  method: HttpMethod;
  body: any;
  token: UserToken;

  constructor(endpoint: string, method: HttpMethod) {
    this.endpoint = endpoint;
    this.method = method;
  }
}

export default HttpRequest;
