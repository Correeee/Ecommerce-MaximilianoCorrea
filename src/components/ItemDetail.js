import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState, useContext} from 'react'
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemDetail({product , stock}) {
  const {addItem, cart} = useContext(CartContext)

  const [contador, setContador] = useState(0)
  const [addedCart, setAddedCart] = useState(false)

  const restar = () =>{
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  const sumar = () =>{
    setContador(contador + 1)
  }

  const agregarAlCarrito = (e) =>{
    setAddedCart(true)

    if(contador > 0 && contador <= stock){
      addItem(product, contador)
      console.log(cart)
    }

  }

  return (
    <div className='ItemDetail'>
            <div className='div__itemDetail'>
              <h3 className='itemDetail__title'>{product.name}</h3>
              <img src={product.url} alt={product.name} className='itemDetail__img'/>
              <p className='itemDetail__description'>{product.description}</p>
              <h4 className='itemDetail__price'>$ {product.price}</h4>
              <h4 className='stock'>Stock: {stock}</h4>
              <div className='div__btn_ItemQuantitySelector'>
                {!addedCart ?                 
                      <>
                        <button className='btns__ItemQuantitySelector btn__min' onClick={restar}>-</button>
                        <p className='btn__ItemQuantitySelector_number'>{contador}</p>
                        <button className='btns__ItemQuantitySelector btn__max' onClick={sumar}>+</button>
                        {contador !== 0 && contador <= stock ?                     
                        <button className='btn__ItemQuantitySelector_Carrito' onClick={agregarAlCarrito} ><ShoppingCartIcon/></button> 
                        :                     
                        <button className='btn__ItemQuantitySelector_Carrito_zero' onClick={agregarAlCarrito} disabled={true}><ShoppingCartIcon/></button>}
                      </>

                      :
                      
                      <>
                        <Link to={'/cart'}>
                          <button className='btn__final'>IR AL CARRITO</button>
                        </Link>
                      </>
                }
              </div> 
            </div>
    </div>
  )
}
