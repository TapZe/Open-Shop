import { JwtPayload } from "jwt-decode";

export type LoginCredentials = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export interface UserJwtPayload extends JwtPayload {
  user: string;
  iat: number;
  sub: string;
}

export type UserState = {
  token: string;
  tokenPayload: UserJwtPayload;
};

export type Geolocation = {
  lat: string;
  long: string;
};

export type Address = {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
};

export type Name = {
  firstname: string;
  lastname: string;
};

export type User = {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
};

export type UsersResponse = User[];

export type UserProfileProps = {
  user: User;
}