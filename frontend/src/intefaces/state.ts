import { IUser } from './user';

export interface IState {
  access: string;
  refresh: string;
  isAuthenticated: boolean;
  user: IUser | null;
}
