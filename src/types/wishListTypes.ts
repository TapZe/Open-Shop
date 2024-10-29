import { Product, ProductProps } from "./productTypes";

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

export interface AddWishlistBtnProps extends ProductProps {
  toolPlace?: "left"|"right"|"top"|"bottom";
}