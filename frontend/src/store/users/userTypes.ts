import { IUser } from '../../intefaces';

export interface IState {
  access: string;
  refresh: string;
  isAuthenticated: boolean;
  user: IUser | null;
}
