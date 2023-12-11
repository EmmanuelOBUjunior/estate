import React from 'react'

function OAuthButton() {

    const handleGoogleAuth = async () => {
        try {
            
        } catch (error) {
            console.log("Failed to sign in with Google: " , error)
        }
    }

  return (
        <button type= "button" onClick={handleGoogleAuth} className='bg-red-700 uppercase p-3 text-white rounded-lg hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuthButton