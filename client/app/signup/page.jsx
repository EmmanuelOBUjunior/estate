import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <h1 className='font-bold text-4xl'>Sign Up</h1>
        <p>Create an account with us</p>
        <form className='mt-4 flex flex-col'>
          <label htmlFor="username">Username</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="text" id="username" placeholder='Enter username here' />
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Enter email here' />
          <label htmlFor="password">Password</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="password" id="username" placeholder='Enter password here' />

          <button className='bg-slate-800 text-white p-3 rounded-lg mt-2'>Sign Up</button>
        </form>

        <div className='mt-2 flex gap-2 justify-center'>
          <p>Already have an account? </p>
          <Link href="/signin" className='text-blue-800 font-medium'>Sign In</Link>
        </div>

        </div>
      </div>
    </section>
  )
}

export default SignUp