'use client'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"

export const makeStore = configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })