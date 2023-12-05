import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import { combineReducers } from 'redux';


// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth',], // the slices you want to persist
};

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export { store };