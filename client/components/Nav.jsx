import {FaSearch} from 'react-icons/fa'
import Link from 'next/link'

const Nav = () => {

  return (
    <nav className='bg-slate-300 shadow-md'>
        <div className="flex mx-auto justify-between max-w-6xl items-center p-3">
        <h1 className='font-bold text-sm sm:text-lg flex flex-wrap'>
            <span className="text-slate-600 ">
                Cris
            </span>
            <span className="text-slate-800">
                Estate
            </span>
        </h1>

        <form className="bg-slate-200 flex items-center p-2 rounded">
            <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-24 sm:w-64"/>
            <FaSearch className='text-slate-500'/>
        </form>

        <ul className='flex gap-3'>
            <Link href= "/">
            <li className='text-slate-600 hover:underline hidden sm:inline hover:cursor-pointer'>Home</li>
            </Link>
            <Link href="/about">
            <li className='text-slate-600 hover:underline hidden sm:inline hover:cursor-pointer'>About</li>
            </Link>
            <Link href="/signin">
            <li className='text-slate-600 hover:underline hidden sm:inline hover:cursor-pointer'>Sign In</li>
            </Link>
        </ul>
        </div>
    </nav>
  )
}

export default Nav