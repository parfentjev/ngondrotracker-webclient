import { Reducer, useCallback, useReducer } from 'react';
import UserToken from '../models/UserToken';

enum ActionType {
  SEND,
  SUCCESS,
  ERROR,
}

export enum RequestStatus {
  PENDING,
  SENDING,
  SUCCESS,
  ERROR,
}

type RequestState<T> = {
  status: RequestStatus;
  message: string;
  data: T;
};

type RequestAction = {
  type: ActionType;
  data?: any;
  message?: string;
};

const httpReducer = <T>(status: RequestState<T>, action: RequestAction) => {
  switch (action.type) {
    case ActionType.SEND:
      return {
        status: RequestStatus.SENDING,
        message: null,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        status: RequestStatus.SUCCESS,
        message: action.message,
        data: action.data,
      };
    case ActionType.ERROR:
      return {
        status: RequestStatus.ERROR,
        message: action.message,
        data: action.data,
      };
    default:
      return status;
  }
};

const useHttp = <ReqT, ResT>(
  requestFunction: (requestData: ReqT) => Promise<ResT>
) => {
  const [state, dispatch] = useReducer<
    Reducer<RequestState<ResT>, RequestAction>
  >(httpReducer, {
    status: RequestStatus.PENDING,
    message: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (requestData: ReqT): Promise<UserToken> => {
      dispatch({ type: ActionType.SEND });

      let responseData;
      try {
        responseData = await requestFunction(requestData);
        dispatch({ type: ActionType.SUCCESS, data: responseData });
      } catch (error) {
        dispatch({ type: ActionType.ERROR, message: error.message });
      }

      return responseData;
    },
    [requestFunction]
  );

  return { sendRequest, state };
};

export default useHttp;
