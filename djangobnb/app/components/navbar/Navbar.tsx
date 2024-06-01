import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 py-6 bg-white z-10 border'>
      <div className='container-custom'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            DjangoBnb
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
