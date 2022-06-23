import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { diaryReducer } from "./diary";
import { wishReducer } from "./wishList";
import { todoReducer } from "./todoList";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  diary: diaryReducer.reducer,
  wish: wishReducer.reducer,
  todo: todoReducer.reducer,
  user: userReducer.reducer,
});

const persistConfig = {
  key: "task-manager",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof persistedReducer>;
