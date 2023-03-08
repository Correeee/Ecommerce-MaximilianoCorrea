import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

    const {cart} = useContext(CartContext)
    const carritoCantidad = cart.length;
    const carrito = {id: 1, name: 'Carrito', route:'/cart'}

    const [animation, setAnimation] = useState('carrito_cantidad')

    useEffect(() => {
        if(cart.length > 0){
            setAnimation('carrito_lleno')
        }else{
            setAnimation('carrito_cantidad')
        }
        
        return () => {
            
        }
    }, [cart])
    

    return (
        <div className='div__carrito' id='div_carrito'>
            <Link className='carrito' key={carrito.id} to={carrito.route}><ShoppingCartIcon sx={{ fontSize: 50 }} />
            <h4 id={animation}>{carritoCantidad}</h4></Link>
        </div>
        
    )


    
}
