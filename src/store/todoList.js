import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    todoCreate: (state, action) => {
      state.unshift(action.payload);
    },
    todoEdit: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    todoRemove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = todoReducer.actions;

export default todoReducer.reducer;
