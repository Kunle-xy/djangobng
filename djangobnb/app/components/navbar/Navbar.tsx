import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchFilter from './SearchFilter'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 py-6 bg-white z-10 border'>
      <div className='container-custom'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image
              src="/logo.png"
              alt='DjongoAirbnb logo'
              width={180}
              height={38}
            />
          </Link>
          <SearchFilter />

          <div className=''>
            Add property
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
