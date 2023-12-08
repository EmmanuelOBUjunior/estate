'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({user: userReducer})

const persistConfiq = {
  key: "root",
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfiq, rootReducer)

export const makeStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })

export const persistor = persistStore(makeStore)
