import React from 'react'
import {Link} from 'react-router-dom'

export default function Item({product}) {
    return (
        <div key={product.id} className='div__producto'>
        <img src={product.url} alt={product.name} className='producto__img'/>
            <h2 className='producto__title'>{product.name}</h2>
            <p className='producto__description'>{product.description}</p>
            <h4 className='producto__stock'>Stock: {product.stock}</h4>
            <h3 className='producto__price'>$ {product.price}</h3>
            <Link to={`/producto/${product.id}`}><button className='btn__ver'>COMPRAR</button></Link>
        </div>
    )
}
