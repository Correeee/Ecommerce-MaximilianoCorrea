import React from 'react'
import { createContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [idBuy, setidBuy] = useState()

  useEffect(() => {
    const sumProduct = cart.map(producto => producto.quantity * producto.price)
        .reduce((a , b) => {return a + b}, 0)

        setTotal(sumProduct)

  }, [cart])
  

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
    const filter = cart.filter(producto =>producto.id !== id)
    setCart(filter)
  }

  const clear = () =>{
    setCart([]);
  }

  const data = {cart, setCart, addItem, removeItem, isInCart, clear, total, idBuy, setidBuy} //INFO A ENVIAR A LOS HIJOS
  return (
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  )
}

export default CartContext;
