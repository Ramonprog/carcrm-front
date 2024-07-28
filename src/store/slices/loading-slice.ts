import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    change: false,
  },
  reducers: {
   changeLoading: (state) => {
      state.change = !state.change;
    },
  },
});

export const { changeLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;