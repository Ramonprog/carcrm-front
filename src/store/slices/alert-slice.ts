import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    isAlert: false,
  },
  reducers: {
    change: (state) => {
      state.isAlert = !state.isAlert;
    }
  },
});

export const { change} = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
