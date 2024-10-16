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

export type UserState = {
  token: string;
  tokenPayload: JwtPayload;
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
