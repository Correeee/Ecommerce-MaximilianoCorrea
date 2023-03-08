import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'


export default function Cart() {

    const {cart, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [animation, setAnimation] = useState()

    useEffect(() => {
        const sumProduct = cart.map(producto => producto.quantity * producto.price)
        .reduce((a , b) => {return a + b}, 0)

        if(cart.length != 0){
            setAnimation('total_animation')
        }else{
            setAnimation()
        }

        setTotal(sumProduct)
        console.log("SUM CART" , cart)
        return () => {}
    }, [cart]) //AL ELIMINAR DE A 1 LOS PRODUCTOS NO SE REDUCE EL PRECIO
    
    const remove = (e) =>{
        removeItem(e.target.value)
    }

    return (
        <div>
            <h3 className='category__title'>Finalizá tu compra</h3>
                <div className='cart__alldiv'>
                    <div className='cart__div'>
                        <button className='btn__vaciar' alt='Vaciar Carrito' onClick={clear}>VACIAR CARRITO</button>
                        {cart.length > 0 ? cart.map(producto =>{
                            return <div className='cart__div_product'>
                                <h3>{producto.name}</h3>
                                <img src={producto.url} className='img__cart'/>
                                <p>{producto.description}</p>
                                <h3>Cantidad: {producto.quantity}</h3>
                                <p>$ {producto.price}</p>
                                <button id='btn_eliminar' onClick={remove} value={producto.id}>Eliminar</button>
                                </div>
                        }) : <h2>TU CARRITO ESTÁ VACÍO</h2>}
                    </div>
                    <div className='cart__pay'>
                        <form action="">
                            <h2 className='pay__titles'>Total</h2>
                                <h3 className='total' id={animation}>$ {total}</h3>
                                <button type="submit" className='btn__buy'>PAGAR</button>
                        </form>
                    </div>
                </div>

        </div>
    )
}
