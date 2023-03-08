import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Item({product}) {
    const {idProduct} = useParams()
    console.log(idProduct)

    return (
        <div key={product.id} className='div__producto'>
        <img src={product.url} alt={product.name} className='producto__img'/>
            <h2 className='producto__title'>{product.name}</h2>
            <p className='producto__description'>{product.description}</p>
            <h3 className='producto__price'>$ {product.price}</h3>
            <Link to={`/producto/${product.id}`}><button className='btn__ver'>VER DESCRIPCIÓN</button></Link>
        </div>
    )
}
