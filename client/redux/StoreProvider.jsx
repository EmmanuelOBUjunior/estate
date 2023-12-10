'use client'
import { Provider } from 'react-redux'
import { makeStore } from '../redux/store.js'

export default function StoreProvider({children}) {
  // const storeRef = useRef(null)
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore

  // }

  return <Provider store={makeStore}>{children}</Provider>
}