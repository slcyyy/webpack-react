// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./modules/user";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

//调用useDispatch时，有必要指定"dispatch“类型.官网给的建议：https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
