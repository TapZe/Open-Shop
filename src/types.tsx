import { JwtPayload } from "jwt-decode";

export type ThemeState = {
  isDark: boolean;
};

// User
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

// Wish list
export type WishListItem = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type WishListState = {
  wishList: {
    [userId: number]: WishListItem[];
  };
};

export type WishListPayload = {
  userId: number;
  wishList: WishListItem;
};

export type RemoveWishListPayload = {
  userId: number;
  productId: number;
};
