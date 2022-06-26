import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../util/interface";

const initialState: UserProps = {};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserProps>) => {
      return action.payload;
    },
    userLogout: (state, action: PayloadAction<UserProps>) => {
      return {};
    },
  },
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
