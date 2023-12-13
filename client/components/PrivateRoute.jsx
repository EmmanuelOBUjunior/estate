import {useRouter} from 'next/navigation'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const router = useRouter()
    const {currentUser} = useSelector((state) => state.user)
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute