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

        <form>
            <input type="text" />
        </form>
        </div>
    </nav>
  )
}

export default Nav