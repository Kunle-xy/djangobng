'use client'

import {useEffect, useState} from 'react'
import React from 'react'
import PropertyListitem from './PropertyListitem'
import MyPropertiespage from '@/app/myproperties/page'
import apiService from '@/app/services/apiService'


export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}


const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([])

  const getProperties = async() => {
    const tmpProperties = await apiService.get('/api/properties')
    setProperties(tmpProperties.data)
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
