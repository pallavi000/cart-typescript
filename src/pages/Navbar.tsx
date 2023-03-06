import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm  bg-white w-full sticky top-0'>
        <div className='flex items-center gap-8 font-medium text-lg'>
            <Link to="/" className='hover:text-gray-600 cursor-pointer'>Home</Link>
            <Link to="/cart" className='hover:text-gray-600 cursor-pointer'>Store</Link>
            <Link to="#" className='hover:text-gray-600 cursor-pointer'>About</Link>
        </div>
        <div className='relative border rounded-full flex items-center justify-center px-3 py-2 shadow'><i className="fa-solid fa-cart-shopping text-xl  cursor-pointer"></i>
        <div className='absolute -bottom-1 -right-1 bg-red-600 px-1.5 py-0.5 text-xs text-white rounded-full'>0</div>
        </div>
    </div>
  )
}

export default Navbar