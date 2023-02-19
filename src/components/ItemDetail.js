import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from 'react'

export default function ItemDetail({product, cart}) {
  const [contador, setContador] = useState(0)

  console.log("CARRITO:" , cart)

  const restar = () =>{
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  const sumar = () =>{
    setContador(contador + 1)
  }

  const agregarAlCarrito = () =>{
    if(contador != 0){
      cart.push(product)
      console.log("Pusheado al carrito:" , cart)
    }

  }

  return (
    <div className='ItemDetail'>
            <div className='div__itemDetail'>
              <h3 className='itemDetail__title'>{product.name}</h3>
              <img src={product.url} alt={product.name} className='itemDetail__img'/>
              <p className='itemDetail__description'>{product.description}</p>
              <h4 className='itemDetail__price'>{product.price}</h4>
                <div className='div__btn_ItemQuantitySelector'>
                    <button className='btns__ItemQuantitySelector btn__min' onClick={restar}>-</button>
                    <p className='btn__ItemQuantitySelector_number'>{contador}</p>
                    <button className='btns__ItemQuantitySelector btn__max' onClick={sumar}>+</button>
                    <button className='btn__ItemQuantitySelector_Carrito' onClick={agregarAlCarrito}><ShoppingCartIcon/></button>
                </div>
            </div>
    </div>
  )
}
