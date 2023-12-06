import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {},
    middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware({
        serializableCheck: false
    })
  })
}