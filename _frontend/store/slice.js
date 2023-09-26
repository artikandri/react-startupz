import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeApiCall } from "./async";

const menu = {
  items: [
    {
      name: "dashboard",
      icon: "dashboard",
      placeholder: "Dashboard",
      path: "/",
      page: "Dashboard",
      exact: true,
    },
    {
      name: "suppliers",
      icon: "suppliers",
      placeholder: "Suppliers",
      path: "/suppliers",
      page: "Suppliers",
      exact: true,
    },
  ],
};

const initialState = { items: [] };

export const setMenu = createAsyncThunk("menu/setMenu", () =>
  fakeApiCall(menu)
);

const slice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [setMenu.fulfilled.type](state, action) {
      return action.payload;
    },
  },
});

export default slice.reducer;
