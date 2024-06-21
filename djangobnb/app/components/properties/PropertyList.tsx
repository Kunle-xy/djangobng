'use client'

import {useEffect, useState} from 'react'
import React from 'react'
import PropertyListitem from './PropertyListitem'
import MyPropertiespage from '@/app/myproperties/page'


export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}


const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([])

  const getProperties = async() => {
    const url = 'http://localhost:8000/api/properties/'

    await fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setProperties(data.data)
    }
  )
    .catch(error => console.log(error))


  };

  useEffect(() => {
    getProperties()
  }
  , [])
  return (
    <>
      {properties.map((property) => {
        return <PropertyListitem key={property.id}
        property={property}
        />

      }
      )}
    </>
  )
}

export default PropertyList
