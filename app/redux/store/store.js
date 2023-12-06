"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";



const rootReducer = combineReducers({
    auth: authSlice,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,

});