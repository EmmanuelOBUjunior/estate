import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice.js"

export const makeStore = () => {
  return configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })
}