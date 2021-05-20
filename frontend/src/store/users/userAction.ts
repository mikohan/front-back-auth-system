import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { IState } from '../../intefaces';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  IUserAction,
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
  USER_GOOGLE_LOGIN_SUCCESS,
  USER_GOOGLE_LOGIN_FAIL,
} from './userActionTypes';

export const checkAuthenticated = () => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  let token: string | null = null;
  try {
    token = JSON.parse(localStorage.getItem('access') as string);
  } catch (e) {
    console.log('Cant get tocken from localstorage', e);
  }

  if (localStorage.getItem('access')) {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`;
      const body = { token: token };
      const res = await axios.post(url, body);
      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: USER_AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: USER_AUTHENTICATED_FAIL,
        });
      }
    } catch (e) {
      dispatch({
        type: USER_AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_AUTHENTICATED_FAIL,
    });
  }
};

export const loadUser = () => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  let token = null;
  try {
    token = JSON.parse(localStorage.getItem('access') as string);
  } catch (e) {
    console.log('Cannot get token from localstorage', e);
  }

  if (token) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
        Accept: 'application/json',
      },
    };
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/users/me/`;
      const res = await axios.get(url, config);
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      console.log('Cant Load User on line 40 userActions in store ', e);
      dispatch({
        type: USER_LOADED_FAIL,
        payload: null,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
      payload: null,
    });
  }
};

// USER login

export const login = (email: string, password: string) => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  const body = { email, password };
  const url = `${process.env.REACT_APP_API_URL}/auth/jwt/create/`;
  try {
    const res = await axios.post(url, body);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser() as any);
  } catch (e) {
    console.log('Cant create token in actions 21 line', e);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: null,
    });
  }
};
// Google user login
export const googleLogin = (tokenId: string) => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  if (tokenId && !localStorage.getItem('access')) {
    const payload = {
      auth_token: tokenId,
    };
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const url = `http://localhost:8000/auth/social/google/`;
    try {
      const res = await axios.post(url, payload);
      console.log(res);
      // dispatch({
      //   type: USER_GOOGLE_LOGIN_SUCCESS,
      //   payload: res.data,
      // });
      // dispatch(loadUser() as any);
      return {
        type: USER_GOOGLE_LOGIN_SUCCESS,
        payload: {
          access: res.data.tokens.access,
          refresh: res.data.tokens.refresh,
        },
      };
    } catch (e) {
      dispatch({
        type: USER_GOOGLE_LOGIN_FAIL,
        payload: null,
      });
      console.log('Error in googel authentication action', e);
    }
  }
};

// USER sign up

export const signup = (email: string, password: string) => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  const body = { email, password };
  const url = `${process.env.REACT_APP_API_URL}/auth/users/`;
  try {
    const res = await axios.post(url, body);
    dispatch({
      type: USER_SIGN_UP_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log('Cant create token in actions 21 line', e);
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: null,
    });
  }
};
// User activation

export const verify = (uid: string, token: string) => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  const body = { uid, token };
  const url = `${process.env.REACT_APP_API_URL}/auth/users/activation/`;
  try {
    const res = await axios.post(url, body);
    dispatch({
      type: USER_ACTIVATION_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log('Cant create token in actions 21 line', e);
    dispatch({
      type: USER_ACTIVATION_FAIL,
      payload: null,
    });
  }
};

export const logout = () => (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export const resetPassword = (email: string) => async (
  dispatch: ThunkDispatch<IState, void, IUserAction>
) => {
  const body = { email };
  const url = `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`;
  try {
    await axios.post(url, body);
    dispatch({
      type: USER_PASSWORD_RESET_SUCCESS,
    });
  } catch (e) {
    console.log('Cannot call api reset password', e);
    dispatch({
      type: USER_PASSWORD_RESET_FAIL,
    });
  }
};

export const resetPasswordConfirm = (
  uid: string,
  token: string,
  password: string
) => async (dispatch: ThunkDispatch<IState, void, IUserAction>) => {
  const body = { uid, token, new_password: password };
  console.log(body);
  const url = `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`;
  console.log(url);
  try {
    await axios.post(url, body);
    dispatch({
      type: USER_PASSWORD_RESET_CONFIRM_SUCCESS,
    });
  } catch (e) {
    console.log('Cannot call api reset password', e);
    dispatch({
      type: USER_PASSWORD_RESET_CONFIRM_FAIL,
      payload: null,
    });
  }
};
