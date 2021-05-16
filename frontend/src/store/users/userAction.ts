import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { IState } from '../../intefaces';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  IUserAction,
} from './userActionTypes';
import { IUser } from '../../intefaces';

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
      //const url = `${process.env.REACT_APP_API_URL}/auth/users/me/`;
      const url = 'http://localhost:8001/auth/users/me/';
      const res = await axios.get(url, config);
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      console.log('Cant Load User on line 40 userActions in store ', e);
      // dispatch({
      //   type: USER_LOADED_FAIL,
      //   payload: null,
      // });
    }
  } else {
    // dispatch({
    //   type: USER_LOADED_FAIL,
    //   payload: null,
    // });
  }
};

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
