import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: ""
  },
  reducers: {
    LogIn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("@token", action.payload);
    },
    LogOut: (state) => {
      state.token = "";
      localStorage.removeItem("@token");
    }
  },
});

export const { LogIn, LogOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
