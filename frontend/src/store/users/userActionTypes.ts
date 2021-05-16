import { IJwt, IUser } from '../../intefaces';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const USER_AUTHENTICATED_SUCCESS = 'USER_AUTHENTICATED_SUCCESS';
export const USER_AUTHENTICATED_FAIL = 'USER_AUTHENTICATED_FAIL';
export const USER_PASSWORD_RESET_SUCCESS = 'USER_PASSWORD_RESET_SUCCESS';
export const USER_PASSWORD_RESET_FAIL = 'USER_PASSWORD_RESET_FAIL';
export const USER_PASSWORD_RESET_CONFIRM_SUCCESS =
  'USER_PASSWORD_RESET_CONFIRM_SUCCESS';
export const USER_PASSWORD_RESET_CONFIRM_FAIL =
  'USER_PASSWORD_RESET_CONFIRM_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface IUserLogin {
  type: typeof USER_LOGIN_SUCCESS | typeof USER_LOGIN_FAIL;
  payload: IJwt | null;
}
export interface IUserFetchAction {
  type: typeof USER_LOADED_SUCCESS | typeof USER_LOADED_FAIL;
  payload: IUser | null;
}

export interface ILogout {
  type: typeof USER_LOGOUT;
}

export interface IUserAuthenticatedCheckAction {
  type: typeof USER_AUTHENTICATED_SUCCESS | typeof USER_AUTHENTICATED_FAIL;
  payload?: boolean;
}

export interface IUserResetPasswordAction {
  type: typeof USER_PASSWORD_RESET_SUCCESS | typeof USER_PASSWORD_RESET_FAIL;
  payload: string | null;
}
export interface IUserResetPasswordConfirmAction {
  type:
    | typeof USER_PASSWORD_RESET_CONFIRM_SUCCESS
    | typeof USER_PASSWORD_RESET_CONFIRM_FAIL;
  payload: string | null;
}

export type IUserAction =
  | IUserLogin
  | IUserFetchAction
  | ILogout
  | IUserAuthenticatedCheckAction
  | IUserResetPasswordAction
  | IUserResetPasswordConfirmAction;
