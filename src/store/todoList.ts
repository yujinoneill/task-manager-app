import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoListProps } from "../util/interface";

export const todoReducer = createSlice({
  name: "todoList",
  initialState: Array<TodoListProps>,
  reducers: {
    todoCreate: (state, action: PayloadAction<TodoListProps>) => {
      state.unshift(action.payload);
    },
    todoEdit: (state, action: PayloadAction<TodoListProps>) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    todoRemove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = todoReducer.actions;

export default todoReducer.reducer;
