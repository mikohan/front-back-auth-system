import { IUser } from './user';

export interface IState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
}
