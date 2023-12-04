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
//   user: userReducer,
  // [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export {store};

// store/index.js
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     // Add other reducers as needed
//   },
// });
