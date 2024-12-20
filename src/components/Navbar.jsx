import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="sticky z-10 navbar navbar-expand-lg navbar-light bg-light dark:bg-zinc-900 dark:text-white w-full py-4 drop-shadow-xl ">
        {/* add two navlinks for logo(home) and github */}
       <ul className='
       flex items-center justify-around' >
        <li>
            <a href="/" className="text-2xl font-thin"><span className='text-red-500' >&lt;</span> Pass-My-Word <span className='text-red-500' >/&gt;</span></a>
        </li>
        <li>
            <a href="https://github.com/A-JA-Y" target='_blank' className="text-2xl font-bold ">GitHub</a>
        </li>
       </ul>

        </nav>
    </>
  )
}

export default Navbar
