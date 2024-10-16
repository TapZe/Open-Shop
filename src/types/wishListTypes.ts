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
