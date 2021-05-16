import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { userReducer } from './users/userReducer';

const rootReducer = combineReducers({
  users: userReducer,
});

export interface IState {}

const initialState = {} as IState;

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
