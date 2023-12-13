import { app } from '@/firebase';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

function OAuthButton() {

    const handleGoogleAuth = async () => {
        try {
            const provider  = new GoogleAuthProvider();
            const auth  = getAuth(app);

            const result =  await signInWithPopup(provider, auth);
            
        } catch (error) {
            console.log("Failed to sign in with Google: " , error)
        }
    }

  return (
        <button type= "button" onClick={handleGoogleAuth} className='bg-red-700 uppercase p-3 text-white rounded-lg hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuthButton