import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import preloader from '../multimedia/spinner.gif'
import { useState, useEffect} from 'react'
import { db } from '../firebase/firebase'
import { doc, getDoc, collection} from 'firebase/firestore'


export default function ItemDetailContainer({cart}) {
  const [products, setProducts] = useState([])
  const {idProduct} = useParams()

  useEffect(()=>{

    const productsCollection = collection(db, 'products');
    const refDoc = doc(productsCollection, idProduct)
    
    getDoc(refDoc).then
    ((data)  =>{
      const productSelection = {
        id: data.id,
        ...data.data()
      }
      setProducts(productSelection)
    })
    
}, [])

  return (
    <div className='ItemDetailContainer'>
      <h3 className='category__title'>{products.category}</h3>
      {products.length !== 0 ? <ItemDetail product={products} cart={cart} stock={products.stock}/> : (
            <div className='div__preloader'>
                <img src={preloader} alt='cargando' className=''/>
            </div>
            )}
    </div>
  )
}
