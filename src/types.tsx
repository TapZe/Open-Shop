import { JwtPayload } from "jwt-decode";

export type ThemeState = {
  isDark: boolean;
};

export type LoginCredentials = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type UserState = {
  token: string;
  tokenPayload: JwtPayload;
};
