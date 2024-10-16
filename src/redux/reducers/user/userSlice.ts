import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserJwtPayload, UserState } from "../../../types/types";
import { jwtDecode } from "jwt-decode";

const initialState: UserState = {
  token: "",
  tokenPayload: {} as UserJwtPayload,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveCurrentToken: (state: UserState, action: PayloadAction<string>) => {
      const token = action.payload;
      state.token = token;
      const decoded = jwtDecode<UserJwtPayload>(action.payload);
      state.tokenPayload = decoded;
    },
    removeCurrentToken: (state: UserState) => {
      state.token = "";
      state.tokenPayload = {} as UserJwtPayload;
    },
  },
});

export const { saveCurrentToken, removeCurrentToken } = userSlice.actions;
export default userSlice.reducer;
