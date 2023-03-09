import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  // console.log("CARRITO:" , cart)

  const addItem  = (item, quantity) =>{

    if(quantity > 0 && !isInCart(item.id)){

      setCart([...cart, {...item, quantity}])

    }else if(quantity > 0 && isInCart(item.id)){

      const productIndex = cart.findIndex(producto => producto.id === item.id) //Busca el PRODUCTO por indice.
      cart[productIndex].quantity += quantity //Le sumo la cantidad a ese PRODUCTO.

    }
  }

  const isInCart = (id) =>{
    return cart.some(producto => producto.id === id)
  }

  const removeItem = (id) =>{
    const filter = cart.filter(producto =>producto.id != id)
    setCart(filter)
  }

  const clear = () =>{
    setCart([]);
  }


  const data = {cart, addItem, removeItem, isInCart, clear} //INFO A ENVIAR A LOS HIJOS
  return (
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  )
}

export default CartContext;
