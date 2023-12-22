import { createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../../interfaces";

const initialState: IPosts[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { addToFavorites } = postsSlice.actions;

export default postsSlice.reducer;
