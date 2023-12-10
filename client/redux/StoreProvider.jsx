'use client'
import { Provider } from 'react-redux'
import { makeStore } from '../redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


export default function StoreProvider({children}) {
  let persistor = persistStore(makeStore);
  return (
  <Provider store={makeStore}>
    <PersistGate persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>
  
  )
}


  // const storeRef = useRef(null)
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore

  // }