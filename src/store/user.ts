import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: UserProps = {};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<{ name: string }>) => {
      return action.payload;
    },
    userLogout: (state, action: PayloadAction<{}>) => {
      return {};
    },
  },
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
