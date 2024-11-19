import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-gray-950 flex items-center justify-around  text-white text-center p-3 lg:text-normal md:text-sm text-xs ">
            <p>&copy; 2024 &lt;pass-<span className=' line-through text-red-500 ' >my</span>-word/&gt; Manager</p>
            <p>created with ❤️ by Ajay</p>
        </footer>
    </>
  )
}

export default Footer