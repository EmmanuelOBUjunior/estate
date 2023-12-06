
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { Provider } from 'react-redux'
import {store} from "../redux/store.js"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CrisEstate',
  description: 'A real estate web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store = {store}>
        <Nav/>
        {children}
        </Provider>
        </body>
    </html>
  )
}
