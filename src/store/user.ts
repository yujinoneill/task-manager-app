import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userLogin: (state, action) => {
      return action.payload;
    },
    userLogout: (state, action) => {
      return {};
    },
  },
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
