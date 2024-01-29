"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    documents: []
};

export const documentsSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {
        fetchDocuments: (state, action) => {
            state.documents = action.payload;
        },
    },
});

export const {
    fetchDocuments,
} = documentsSlice.actions

export default documentsSlice.reducer;