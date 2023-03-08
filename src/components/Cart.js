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
            setTotal(0)
        }
    
        return () => {
        setTotal(sumProduct)
        }

    }, [cart])
    
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
                                <p>{producto.price}</p>
                                <button id='btn_eliminar' onClick={remove} value={producto.id}>Eliminar</button>
                                </div>
                        }) : <h2>TU CARRITO ESTÁ VACÍO</h2>}
                    </div>
                    <div className='cart__pay'>
                        <form action="">
                            <h2 className='pay__titles'>Total</h2>
                                <h3 className='total' id={animation}>$ {total}</h3>
                            <h2 className='pay__titles'>Datos</h2>
                                    <input name='nombre' type="text" placeholder='Nombre'/>
                                    <input name='apellido' type="text" placeholder='Apellido'/>
                                    <input name='dirección' type="text" placeholder='Dirección'/>
                                    <input name='teléfono' type="text" placeholder='Teléfono'/>
                            <h2 className='pay__titles'>Método de pago</h2>
                                    <label htmlFor="">VISA<input type="checkbox" name="visa" id=""/></label>
                                    <label htmlFor="">MASTERCARD<input type="checkbox" name="mastercard" id=""/></label>
                                    <label htmlFor="">MERCADO PAGO<input type="checkbox" name="mercado pago" id=""/></label>
                            <h2 className='pay__titles'>Tarjeta</h2>
                                <input type="number" name="numero de tarjeta" id="" maxLength={1} placeholder='Número de tarjeta'/>
                                <input type="number" name="fecha de caducidad" id="" maxLength={1} placeholder='Fecha de caducidad'/>
                                <input type="number" name="cvv" id="" maxLength={1} placeholder='CVV'/>

                                <button type="submit">¡COMPRAR!</button>
                        </form>
                    </div>
                </div>

        </div>
    )
}
