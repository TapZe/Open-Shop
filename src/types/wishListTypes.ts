import { product } from "./productTypes";

export type WishListState = {
  wishList: {
    [userId: number]: product[];
  };
};

export type WishListPayload = {
  userId: number;
  wishList: product;
};

export type RemoveWishListPayload = {
  userId: number;
  productId: number;
};
