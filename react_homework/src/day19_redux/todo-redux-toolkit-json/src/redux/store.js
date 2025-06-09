import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";
import themeReducer from "../redux/themeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme:themeReducer,
  },
});