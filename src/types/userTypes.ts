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