import { app } from '@/firebase.js';
import { signinSuccess } from '@/redux/features/user/userSlice';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { useDispatch } from 'react-redux';

function OAuthButton() {
    const dispatch = useDispatch()

    const handleGoogleAuth = async () => {
        try {
            const provider  = new GoogleAuthProvider();
            const auth  = getAuth(app);

            const result =  await signInWithPopup(auth, provider);

            console.log(result);

            const res = await fetch("api/auth/google", {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(result.user.displayName, result.user.email, result.user.photoURL),
            })

            const data = await res.json()

            dispatch(signinSuccess(data))

            
        } catch (error) {
            console.log("Failed to sign in with Google: " , error)
        }
    }

  return (
        <button type= "button" onClick={handleGoogleAuth} className='bg-red-700 uppercase p-3 text-white rounded-lg hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuthButton