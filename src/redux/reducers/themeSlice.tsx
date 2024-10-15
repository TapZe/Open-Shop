import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
    isDark: boolean,
}

const initialState: ThemeState = {
  isDark: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    saveTheme: (state, action) => {
      if (action.payload !== state.isDark) {
        state.isDark = action.payload;
      }
    },
  },
});

export const { saveTheme } = themeSlice.actions;
export default themeSlice.reducer;