import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

  const {idProduct} = useParams()
  console.log(idProduct)

  return (
    <div className='ItemDetailContainer'>
      <h3 className='category__title'>CONSOLAS</h3>
      <ItemDetail/>
    </div>
  )
}
