import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DiaryProps } from "../util/interface";

export const diaryReducer = createSlice({
  name: "diary",
  initialState: Array<DiaryProps>,
  reducers: {
    diaryCreate: (state, action: PayloadAction<DiaryProps>) => {
      state.unshift(action.payload);
    },
    diaryEdit: (state, action: PayloadAction<DiaryProps>) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    diaryRemove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const diaryActions = diaryReducer.actions;

export default diaryReducer.reducer;
