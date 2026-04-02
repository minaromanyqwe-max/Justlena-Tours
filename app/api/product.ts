import React from 'react'

export default async function Productapi() {
    let res=await fetch(`https://ecommerce.routemisr.com/api/v1/products`)
    let {data}=await res.json()
  return data
}
