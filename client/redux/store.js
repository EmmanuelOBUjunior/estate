'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice.js"


const rootReducer = combineReducers({user: userReducer})

const persistedReducer = 

export const makeStore = () => {
  return configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })
}
