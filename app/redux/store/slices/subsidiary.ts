"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subsidiaries: [],
};

export const subsidiariesSlice = createSlice({
    name: "subsidiaries",
    initialState,
    reducers: {
        fetchSubsidiaries: (state, action) => {
            state.subsidiaries = action.payload;
        },
    },
});

export const {
    fetchSubsidiaries,
} = subsidiariesSlice.actions

export default subsidiariesSlice.reducer;