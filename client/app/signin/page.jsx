'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()


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
      setLoading(true)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      // console.log(typeof res)
      const data = await res.json()

      if(data.success === false) {
        setLoading(false)
        setError(data.message)
        return
      }

      setLoading(false)
      setError(null)
      router.push("/signin")

      console.log(data)
    }catch(err){
      setLoading(false);
      setError(err.message)
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
          <p>Already have an account? </p>
          <Link href="/signup" className='text-blue-800 font-medium'>Sign In</Link>
        </div>
        {error && <p className='text-sm text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </section>
  )
}

export default SignIn