import { createSlice } from "@reduxjs/toolkit";

export const wishReducer = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    wishInit: (state, action) => {
      return action.payload;
    },
    wishCreate: (state, action) => {
      state.unshift(action.payload);
    },
    wishEdit: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    wishRemove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const wishActions = wishReducer.actions;

export default wishReducer.reducer;
