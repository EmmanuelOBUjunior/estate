'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import userReducer from "./user/userSlice.js"

export default function StoreProvider({ user, children }) {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(userReducer(user))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}