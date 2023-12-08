'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {signinStart, signinSuccess, signinFailure} from "../../redux/features/user/userSlice.js"
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const {loading, error} = useSelector((state) => state.user)
  const router = useRouter()
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    // console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signinStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      // console.log(typeof res)
      const data = await res.json()

      if(data.success === false) {
        dispatch(signinFailure(data.message))
        return
      }

      dispatch(signinSuccess())
      router.push("/")

      console.log(data)
    }catch(err){
      dispatch(signinFailure(err.message))
    }

  }
  // console.log(formData)
  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <h1 className='font-bold text-4xl'>Sign In</h1>
        <p>Welcome back, get access to your account</p>
        <form onSubmit = {handleSubmit} className='mt-4 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Enter email here' onChange = {handleChange}/>
          <label htmlFor="password">Password</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="password" id="password" placeholder='Enter password here' onChange = {handleChange}/>

          <button className='bg-slate-800 text-white p-3 rounded-lg mt-2 uppercase disabled:bg-slate-500 hover:bg-slate-700'>{loading ? "Loading...": "Sign In"}</button>
        </form>

        <div className='mt-2 flex gap-2 justify-center'>
          <p>Do not have an account? </p>
          <Link href="/signup" className='text-blue-800 font-medium'>Sign Up</Link>
        </div>
        {error && <p className='text-sm text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </section>
  )
}

export default SignIn