import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  USER_AUTHENTICATED_SUCCESS,
  USER_AUTHENTICATED_FAIL,
  USER_LOGOUT,
  USER_PASSWORD_RESET_SUCCESS,
  USER_PASSWORD_RESET_FAIL,
  USER_PASSWORD_RESET_CONFIRM_SUCCESS,
  USER_PASSWORD_RESET_CONFIRM_FAIL,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAIL,
  USER_ACTIVATION_SUCCESS,
  USER_ACTIVATION_FAIL,
  IUserAction,
  USER_GOOGLE_LOGIN_SUCCESS,
  USER_GOOGLE_LOGIN_FAIL,
} from './userActionTypes';
import { IUserState } from '../../intefaces';

const initialState: IUserState = {
  access: localStorage.getItem('access') || null,
  refresh: localStorage.getItem('refresh') || null,
  isAuthenticated: false,
  user: null,
};

export const userReducer = (
  state: IUserState = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case USER_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case USER_AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem('access', JSON.stringify(action.payload?.access!));
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload?.access,
        refresh: action.payload?.refresh,
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
    case USER_GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    case USER_LOGOUT:
    case USER_GOOGLE_LOGIN_FAIL:
    case USER_LOGIN_FAIL:
    case USER_SIGN_UP_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };
    case USER_PASSWORD_RESET_SUCCESS:
    case USER_PASSWORD_RESET_FAIL:
    case USER_PASSWORD_RESET_CONFIRM_SUCCESS:
    case USER_PASSWORD_RESET_CONFIRM_FAIL:
    case USER_ACTIVATION_SUCCESS:
    case USER_ACTIVATION_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};
