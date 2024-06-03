import Image from 'next/image'
import React from 'react'

const Catgories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
        <Image
            src='/Amazing Pool.jpg'
            alt='pool'
            width={20}
            height={20}
        />
        <span>Amazing Pool</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
        <Image
            src='/Cabins.jpg'
            alt='cabins'
            width={20}
            height={20}
        />
        <span>Cabins</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
        <Image
            src='/Mansions.jpg'
            alt='Mansions'
            width={20}
            height={20}
        />
        <span>Mansions</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
        <Image
            src='/Treehousaes.jpg'
            alt='Treehouses'
            width={20}
            height={20}
        />
        <span>TreeHouses</span>
      </div>
    </div>
  )
}

export default Catgories
