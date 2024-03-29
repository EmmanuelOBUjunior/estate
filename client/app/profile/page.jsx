'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import { app } from '@/firebase'


const Profile = () => {
  const fileRef = useRef(null)
  const {currentUser} = useSelector((state) =>state.user)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})

  console.log(formData)

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

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setFilePerc(Math.floor(progress))
      },
      (error) =>{
        setFileUploadError(true)
      },
      ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
        setFormData({...formData, avatar: downloadURL})}
      )
    }
    )
  }

  return (
    <section>
      <div className='h-screen justify-center flex items-center'>
        <div className='border border-gray-400 p-6 max-w-md w-full rounded'>
        <div className='items-center flex flex-col gap-2'>
        <h1 className='font-bold text-4xl'>Profile</h1>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} accept='image/*' hidden/>
        <img onClick={()=> fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="Profile Picture" className='rounded-full object-cover  h-24 w-24 cursor-pointer'/>
        <p className="text-sm self-center">
         {
          fileUploadError ? (<span className='text-red'>Image Upload Error</span>) : filePerc > 0 && filePerc < 100 ? (<span className='text-slate-700'> Uploading {filePerc}%</span>) : filePerc === 100 ? (<span className='text-green-700'>Image Upload Complete</span>) : ''
         }
        </p>
        </div>
        <form className='mt-8 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="email" placeholder='Email'/>
          <label htmlFor="username">Username</label>
          <input className='p-3 rounded focus:outline-none text-sm mb-3' type="email" id="username" placeholder='Username'/>
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