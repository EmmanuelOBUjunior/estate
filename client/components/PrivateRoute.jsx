'use client'
import {useRouter} from 'next/navigation'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {
    const router = useRouter()
    const {currentUser} = useSelector((state) => state.user)



  return (
    <>{children}</>
  )
}

export default PrivateRoute