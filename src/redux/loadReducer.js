import { LOADER_ON, LOADER_OFF, ERROR_ON, ERROR_OFF } from './types';

const initialState = {
  loading: false,
  error: null,
};

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: false,
      };

    case LOADER_OFF:
      return {
        ...state,
        loading: true,
      };

    case ERROR_ON:
      return {
        ...state,
        error: action.msg,
      };

    case ERROR_OFF:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
