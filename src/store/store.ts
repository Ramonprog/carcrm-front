import { configureStore } from "@reduxjs/toolkit";
import {  TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { exampleReducer } from "./slices/example-slice";
import { loadingReducer } from "./slices/loading-slice";


export const store = configureStore({
  reducer: {
    example: exampleReducer,
    loading:loadingReducer
  },
});

// para tipar
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;