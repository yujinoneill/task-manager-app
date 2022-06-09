import { createSlice } from "@reduxjs/toolkit";

export const diaryReducer = createSlice({
  name: "diary",
  initialState: [],
  reducers: {
    diaryInit: (state, action) => {
      return action.payload;
    },
    diaryCreate: (state, action) => {
      state.unshift(action.payload);
    },
    diaryEdit: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    diaryRemove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const diaryActions = diaryReducer.actions;

export default diaryReducer.reducer;
