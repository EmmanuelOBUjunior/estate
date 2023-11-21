import {FaSearch} from 'react-icons/fa'

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
            <input type="text" placeholder="Search" className="bg-transparent focus:outline-none"/>
            <FaSearch className='text-slate-500'/>
        </form>

        <ul className='flex gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
        </ul>
        </div>
    </nav>
  )
}

export default Nav