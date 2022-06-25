import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishListProps } from "../util/interface";

export const wishReducer = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    wishCreate: (state, action: PayloadAction<WishListProps>) => {
      state.unshift(action.payload);
    },
    wishEdit: (state, action: PayloadAction<WishListProps>) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    wishRemove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const wishActions = wishReducer.actions;

export default wishReducer.reducer;
