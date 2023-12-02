import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import authReducer from './slices/authSlice';
// import userReducer from './slices/userSlice';
import {api} from '../services/apiService';
import { combineReducers } from 'redux';


// Persist config
const persistConfig = {
  key: 'root',
  storage,
//   whitelist: ['auth'], // the slices you want to persist
};

// Root reducer
const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export {store};
