import { configureStore } from "@reduxjs/toolkit";

import { diaryReducer } from "./diary";
import { wishReducer } from "./wishList";
import { todoReducer } from "./todoList";
import { userReducer } from "./user";

export const store = configureStore({
  reducer: {
    diary: diaryReducer.reducer,
    wish: wishReducer.reducer,
    todo: todoReducer.reducer,
    user: userReducer.reducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("data", JSON.stringify(store.getState()));
});
