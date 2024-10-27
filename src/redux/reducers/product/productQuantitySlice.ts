import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductQuantityState } from "../../../types/productTypes";

const initialState: ProductQuantityState = {
  productQuantity: [],
};

const productQuantitySlice = createSlice({
  name: "productQuantitySlice",
  initialState,
  reducers: {
    initiateQuantity: (state: ProductQuantityState, action: PayloadAction<number[]>) => {
        if (state.productQuantity.length < 1) {
            action.payload.map((id) => {
                const randomQuantity = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                state.productQuantity.push({ id, quantity: randomQuantity });
            })
        }
    },
    resetQuantity: (state: ProductQuantityState) => {
        state.productQuantity = [];
    },
  },
});

export const { initiateQuantity, resetQuantity } = productQuantitySlice.actions;
export default productQuantitySlice.reducer;
