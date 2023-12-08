import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import StoreProvider from '@/redux/StoreProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore, persistor } from '@/redux/store.js'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CrisEstate',
  description: 'A real estate web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <StoreProvider store = {makeStore}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
        {/* </PersistGate> */}
        </StoreProvider>
        </body>
    </html>
  )
}
