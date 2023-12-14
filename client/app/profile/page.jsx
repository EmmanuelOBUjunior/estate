'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {getStorage, ref, uploadBytesResumable} from "firebase/storage"
import { app } from '@/firebase'

const Profile = () => {
  const fileRef = useRef(null)
  const {currentUser} = useSelector((state) =>state.user)
  const [file, setFile] = useState(undefined)

  useEffect(() =>{
    if(file){
      handleUploadFile(file)
    }
  }, [file])

  const handleUploadFile = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask  = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", () => {
      (snapshot)    })
  }

  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <div className='items-center flex flex-col gap-2'>
        <h1 className='font-bold text-4xl'>Profile</h1>
        <input onChange={(e)=>setFiles(e.target.files)} type="file" ref={fileRef} accept='image/*' hidden/>
        <img onClick={()=> fileRef.current.click()} src={currentUser.avatar} alt="Profile Picture" className='rounded-full w-50 h-50 cursor-pointer'/>
        </div>
        <form className='mt-8 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Email'/>
          <label htmlFor="email">Username</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Username'/>
          <label htmlFor="password">Password</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="password" id="password" placeholder='Change Password' />

          <button className='bg-slate-800 text-white p-3 rounded-lg mt-2 mb-2 uppercase disabled:bg-slate-500 hover:bg-slate-700'>Update</button>
        </form>
        <div className='flex justify-between'>
          <span className='cursor-pointer text-red-800 font-semibold'>
            Delete Account
          </span>
          <span className='cursor-pointer text-red-800 font-semibold'>
            Sign Out
          </span>
        </div>
        </div>
        </div>
      </section>
  )
}

export default Profile