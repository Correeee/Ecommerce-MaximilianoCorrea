import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

export default function Cart() {
    const {cart, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [animation, setAnimation] = useState()
    const [opacity, setOpacity] = useState()
    const [disabled, setDisabled] = useState(true)
    const [emptyCart, emptyCartDisabled] = useState()

    useEffect(() => {
        const sumProduct = cart.map(producto => producto.quantity * producto.price)
        .reduce((a , b) => {return a + b}, 0)

            if(cart.length !== 0){
                setAnimation('total_animation')
                setDisabled(false)
            }else{
                setAnimation()
                setDisabled(true)
                setOpacity('disabled')
                emptyCartDisabled('empty_cart')
            }
        setTotal(sumProduct.toFixed(3))
    }, [cart]) //AL ELIMINAR DE A 1 LOS PRODUCTOS NO SE REDUCE EL PRECIO
    
    const remove = (e) =>{
        removeItem(e.target.value)
    }

    return (
        <div>
            <h3 className='category__title'>FINALIZÁ TU COMPRA</h3>
                <div className='cart__alldiv'>
                    <div className='cart__div' id={emptyCart}>
                        <button className='btn__vaciar' alt='Vaciar Carrito' onClick={clear}>VACIAR CARRITO</button>
                        {cart.length > 0 ? cart.map(producto =>{
                            return <div className='cart__div_product'>
                                <h3>{producto.name}</h3>
                                <img src={producto.url} className='img__cart' alt='cart'/>
                                <p className='cart__item_description'>{producto.description}</p>
                                <h3>Cantidad: {producto.quantity}</h3>
                                <h4 className='producto__stock'>Stock: {producto.stock}</h4>
                                <p>$ {producto.price}</p>
                                <button id='btn_eliminar' onClick={remove} value={producto.id}>Eliminar</button>
                                </div>
                        }) 
                        : 
                        <>
                        <h2 className='cart__msg'>TU CARRITO ESTÁ VACÍO</h2>
                        <Link to={'/'}>Ver productos</Link>
                        </>}
                    </div>
                    <div className='cart__pay'>
                            <h2 className='pay__titles'>Total</h2>
                                <h3 className='total' id={animation}>${total}</h3>
                                <Link to={'/finalizarCompra'}>
                                <button type="submit" className='btn__buy' disabled={disabled} id={opacity}>FINALIZAR COMPRA</button>
                                </Link>
                    </div>
                </div>

        </div>
    )
}
