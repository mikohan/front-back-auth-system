export interface IUser {
  id?: number;
  username?: string;
  email: string;
  password?: string;
  image?: string;
  first_name?: string;
  last_name?: string;
}

export interface IJwt {
  access: string;
  refresh: string;
}
