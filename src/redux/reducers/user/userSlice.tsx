import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";
import { jwtDecode, JwtPayload } from "jwt-decode";

const initialState: UserState = {
  token: "",
  tokenPayload: {} as JwtPayload,
};

const userSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    saveCurrentToken: (state: UserState, action: PayloadAction<string>) => {
      const token = action.payload;
      state.token = token;
      const decoded = jwtDecode(token);
      state.tokenPayload = decoded;
    },
  },
});

export const { saveCurrentToken } = userSlice.actions;
export default userSlice.reducer;
