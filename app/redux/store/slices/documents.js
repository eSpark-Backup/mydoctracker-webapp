"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    documents: [],
    currentDocument: null
};

export const documentsSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {
        fetchDocuments: (state, action) => {
            state.documents = action.payload;
        },
        fetchCurrentDocument: (state, action) => {
            state.currentDocument = action.payload;
        },
    },
});

export const {
    fetchDocuments,
    fetchCurrentDocument,
} = documentsSlice.actions

export default documentsSlice.reducer;