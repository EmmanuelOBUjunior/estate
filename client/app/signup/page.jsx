'use client'
import Link from 'next/link'
import { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    console.log(typeof res)
    const data = await res.json()

    console.log(data)
  }
  // console.log(formData)
  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <h1 className='font-bold text-4xl'>Sign Up</h1>
        <p>Create an account with us</p>
        <form onSubmit = {handleSubmit} className='mt-4 flex flex-col'>
          <label htmlFor="username">Username</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="text" id="username" placeholder='Enter username here' onChange = {handleChange}/>
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Enter email here' onChange = {handleChange}/>
          <label htmlFor="password">Password</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="password" id="password" placeholder='Enter password here' onChange = {handleChange}/>

          <button className='bg-slate-800 text-white p-3 rounded-lg mt-2 uppercase'>Sign Up</button>
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