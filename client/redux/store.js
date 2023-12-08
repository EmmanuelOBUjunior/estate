'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({user: userReducer})

const persitConfiq = {
  key: "root",
  storage,
  version: 1
}

const persistedReducer = persistReducer(persitConfiq, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })
}
