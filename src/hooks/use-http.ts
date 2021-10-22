import { useCallback, useReducer } from 'react';

enum ActionType {
  SEND,
  SUCCESS,
  ERROR,
}

export enum RequestStatus {
  SENDING,
  SUCCESS,
  ERROR,
}

type RequestState<ResT> = {
  status: RequestStatus;
  message: string;
  data: ResT;
};

const httpReducer = <ResT>(
  state: RequestState<ResT>,
  action: { type: ActionType; data?: any; message?: string }
) => {
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
  }
};

const useHttp = <ReqT, ResT>(
  requestFunction: (requestData: ReqT) => Promise<ResT>
) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: null,
    message: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (requestData: ReqT) => {
      dispatch({ type: ActionType.SEND });

      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: ActionType.SUCCESS, data: responseData });
      } catch (error) {
        dispatch({ type: ActionType.ERROR, message: error.message });
      }
    },
    [requestFunction]
  );

  return { sendRequest, httpState };
};

export default useHttp;
