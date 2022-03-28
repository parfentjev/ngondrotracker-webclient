import { HttpMethod } from '../models/HttpMethod';
import HttpRequest from '../models/HttpRequest';
import Meditation from '../models/Meditation';
import { httpRequest } from './util/http-utils';

export const getMeditations = async (): Promise<Meditation[]> => {
  const request = new HttpRequest('/meditations/', HttpMethod.GET);
  const response = await httpRequest(request);

  let data: Meditation[] = [];
  response.result.forEach(
    (r: { title: string; path: string; goal: number; order: number }) =>
      data.push(new Meditation(r.title, r.path, r.goal, r.order))
  );

  return data;
};

export const getMeditationByPath = async (path: string): Promise<Meditation> => {
  const request = new HttpRequest('/meditations/' + path + '/', HttpMethod.GET);
  const response = await httpRequest(request);

  return new Meditation(response.result.title, response.result.path, response.result.goal, response.result.order);
};