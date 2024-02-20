"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    documentsHistory: []
};

export const documentsHistorySlice = createSlice({
    name: "document-history",
    initialState,
    reducers: {
        fetchDocumentHistory: (state, action) => {
            state.documentsHistory = action.payload;
        },
    },
});

export const {
    fetchDocumentHistory,
} = documentsHistorySlice.actions

export default documentsHistorySlice.reducer;