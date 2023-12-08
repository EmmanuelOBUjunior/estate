'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"
import {persistReducer} from 'redux-persist'


const rootReducer = combineReducers({user: userReducer})

const persitConfiq = {
  key: "root",
  storage,
  version: 1
}

const persistedReducer = persistReducer(persitConfiq, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })
}
