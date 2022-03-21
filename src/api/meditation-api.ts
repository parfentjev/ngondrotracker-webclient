import { HttpMethod } from '../models/HttpMethod';
import HttpRequest from '../models/HttpRequest';
import Meditation from '../models/Meditation';
import { httpRequest } from './util/http-utils';

export const getMeditations = async (): Promise<Meditation[]> => {
  const request = new HttpRequest('/meditations/', HttpMethod.GET);
  const response = await httpRequest(request);

  let data: Meditation[] = [];
  response.result.forEach((r: { title: string; path: string; goal: number }) =>
    data.push(new Meditation(r.title, r.path, r.goal))
  );

  return data;
};
