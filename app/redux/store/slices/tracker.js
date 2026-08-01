"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackers: [],
};

export const trackersSlice = createSlice({
    name: "trackers",
    initialState,
    reducers: {
        fetchTrackers: (state, action) => {
            state.trackers = action.payload;
        }
    },
});

export const {
    fetchTrackers,
} = trackersSlice.actions

export default trackersSlice.reducer;