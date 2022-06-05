import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: { user: userSlice, todos: todoSlice },
});
