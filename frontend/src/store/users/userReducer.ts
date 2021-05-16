import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  IUserAction,
} from './userActionTypes';
import { IState } from '../../intefaces';

const initialState: IState = {
  access: localStorage.getItem('access') || null,
  refresh: localStorage.getItem('refresh') || null,
  isAuthenticated: false,
  user: null,
};

export const userReducer = (
  state: IState = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('access', JSON.stringify(action.payload?.access!));
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload?.access,
        refresh: action.payload?.refresh,
      };
    case USER_LOGIN_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
