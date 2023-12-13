'use client'
import {useRouter} from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {
    const router = useRouter()
    const {currentUser} = useSelector((state) => state.user)

    useEffectect(() => {
        if(currentUser){
            return 
        }else{
            router.replace("/signin")
        }
    }, [])

  return (
    <>{children}</>
  )
}

export default PrivateRoute