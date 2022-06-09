import { configureStore } from "@reduxjs/toolkit";

import { diaryReducer } from "./diary";
import { wishReducer } from "./wishList";

export const store = configureStore({
  reducer: { diary: diaryReducer.reducer, wish: wishReducer.reducer },
});

store.subscribe(() => {
  localStorage.setItem("data", JSON.stringify(store.getState()));
});
