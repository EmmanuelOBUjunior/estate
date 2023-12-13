import React from 'react'

const Profile = () => {
  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <h1 className='font-bold text-4xl'>Sign In</h1>
        <p>Welcome back, get access to your account</p>
        <form className='mt-4 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Enter email here'/>
          <label htmlFor="password">Password</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="password" id="password" placeholder='Enter password here' onChange = {handleChange}/>

          <button className='bg-slate-800 text-white p-3 rounded-lg mt-2 mb-2 uppercase disabled:bg-slate-500 hover:bg-slate-700'>{loading ? "Loading...": "Sign In"}</button>
        </form>
        </div>
        </div>
      </section>
  )
}

export default Profile