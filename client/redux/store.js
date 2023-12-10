'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"
import { persistReducer} from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === "undefined" ? createNoopStorage("local") : createWebStorage();


const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
  key: "root",
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })
