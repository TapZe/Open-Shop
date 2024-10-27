import { Product } from "./productTypes";

export type WishListState = {
  wishList: {
    [userId: number]: Product[];
  };
};

export type WishListPayload = {
  userId: number;
  wishList: Product;
};

export type RemoveWishListPayload = {
  userId: number;
  productId: number;
};