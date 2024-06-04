import React from 'react'
import PropertyList from '../components/properties/PropertyList'

const MyPropertiespage = () => {
  return (
    <main>
        <div className='my-6 text-2xl'>
            My Properties
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-6 ">
            <PropertyList />
        </div>
    </main>
  )
}

export default MyPropertiespage
