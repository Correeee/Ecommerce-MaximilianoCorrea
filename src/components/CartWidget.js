import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {

    let carrito_cantidad = 0;

    return (
        <div className='div__carrito' id='div_carrito'>
            <ShoppingCartIcon sx={{ fontSize: 50 }} />
            <h4 id='carrito_cantidad'>{carrito_cantidad}</h4>
        </div>
        
    )


    
}
