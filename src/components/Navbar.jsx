import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light dark:bg-zinc-900 dark:text-white w-full py-4">
        {/* add two navlinks for logo(home) and github */}
       <ul className='
       flex items-center justify-around' >
        <li>
            <a href="/" className="text-2xl font-thin">&lt; Pass-My-Word /&gt;</a>
        </li>
        <li>
            <a href="https://github.com/A-JA-Y" target='_blank' className="text-2xl font-bold">GitHub</a>
        </li>
       </ul>

        </nav>
    </>
  )
}

export default Navbar
