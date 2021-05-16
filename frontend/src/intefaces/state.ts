import { IUser } from './user';

export interface IUserState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
}

export interface IState {
  user: IUserState;
}
