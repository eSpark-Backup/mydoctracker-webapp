"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";


const authPersistConfig = {
    key: "auth",
    storage,
};


const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice),
    //add all your reducers here
},);

const persistedReducer = persistReducer(
    { key: "root", storage },
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);