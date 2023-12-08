'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../redux/store.js'

export default function StoreProvider({children}) {
  return <Provider store={storeRef.current}>{children}</Provider>
}