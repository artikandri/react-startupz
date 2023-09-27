import { configureStore } from "@reduxjs/toolkit";
import {
  createSelectorHook,
  useDispatch as useBasicDispatch,
} from "react-redux";
import routes from "./slice";

const store = configureStore({
  reducer: {
    routes,
  },
});

export const useDispatch = () => useBasicDispatch();

export const useSelector = createSelectorHook();

export default store;
