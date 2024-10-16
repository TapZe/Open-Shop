import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RemoveWishListPayload,
  WishListPayload,
  WishListState,
} from "../../types";

const initialState: WishListState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    saveProduct: (
      state: WishListState,
      action: PayloadAction<WishListPayload>
    ) => {
      const { userId, wishList } = action.payload;
      if (!state.wishList[userId]) {
        state.wishList[userId] = [];
      }
      state.wishList[userId].push(wishList);
    },
    removeProduct: (
      state: WishListState,
      action: PayloadAction<RemoveWishListPayload>
    ) => {
      const { userId, productId } = action.payload;

      if (state.wishList[userId]) {
        state.wishList[userId] = state.wishList[userId].filter(
          (item) => item.id !== productId
        );
      }
    },
  },
});

export const { saveProduct, removeProduct } = wishListSlice.actions;
export default wishListSlice.reducer;
