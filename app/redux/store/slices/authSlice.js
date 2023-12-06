"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: "", // admin / user / employee /

};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeRole: (state, action) => {
            state.role = action.payload;
        }
    },
});

export const {
    changeRole
} = authSlice.actions

export default authSlice.reducer;