import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productQuantityState } from "../../../types/productTypes";

const initialState: productQuantityState = {
  productQuantity: [],
};

const productQuantitySlice = createSlice({
  name: "productQuantitySlice",
  initialState,
  reducers: {
    initiateQuantity: (state: productQuantityState, action: PayloadAction<number[]>) => {
        if (state.productQuantity.length < 1) {
            action.payload.map((id) => {
                const randomQuantity = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                state.productQuantity.push({ id, quantity: randomQuantity });
            })
        }
    },
    resetQuantity: (state: productQuantityState) => {
        state.productQuantity = [];
    },
  },
});

export const { initiateQuantity, resetQuantity } = productQuantitySlice.actions;
export default productQuantitySlice.reducer;
