import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import StoreProvider from '@/redux/StoreProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore} from '@/redux/store.js'
import { persistStore } from 'redux-persist'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CrisEstate',
  description: 'A real estate web application',
}

export default function RootLayout({ children }) {
  let persistor = persistStore(makeStore) 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <StoreProvider store = {makeStore}>
        <PersistGate persistor={persistor}>
        {children}
        </PersistGate>
        </StoreProvider>
        </body>
    </html>
  )
}
