import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartPayload, CartState, DecreaseFromCartPayload, ProductQuantityInCartPayload, RemoveProductFromCartPayload } from "../../types/types";

const initialState: CartState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart: (
      state: CartState,
      action: PayloadAction<AddToCartPayload>
    ) => {
        const { userId, product } = action.payload;

        if (!state.cart[userId]) {
            state.cart[userId] = []; // Initialize the cart for the user
        }

        // Check if the product already exists in the user's cart
        const existingProductIndex = state.cart[userId].findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
            // Product exists, increase the quantity by 1
            state.cart[userId][existingProductIndex].quantity += 1;
        } else {
            // Product does not exist, add it to the cart with quantity 1
            state.cart[userId].push({ ...product, quantity: 1 });
        }
    },
    decreaseProductFromCart: (
      state: CartState,
      action: PayloadAction<DecreaseFromCartPayload>
    ) => {
     
    },
    changeProductQuantityInCart: (
      state: CartState,
      action: PayloadAction<ProductQuantityInCartPayload>
    ) => {
      
    },
    removeProductFromCart: (
      state: CartState,
      action: PayloadAction<RemoveProductFromCartPayload>
    ) => {
       const { userId, productId } = action.payload;

      if (state.cart[userId]) {
        state.cart[userId] = state.cart[userId].filter(
          (item) => item.id !== productId
        );
      }
    },
  },
});

export const { addProductToCart, changeProductQuantityInCart, decreaseProductFromCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
