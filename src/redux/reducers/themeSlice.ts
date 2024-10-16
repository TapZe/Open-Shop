import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../../types/types";

const initialState: ThemeState = {
  isDark: true,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    saveTheme: (state: ThemeState, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { saveTheme } = themeSlice.actions;
export default themeSlice.reducer;
