import React from 'react'

export default function ItemBusqueda({productos}) {

    
    return (
            <div className='comprobante__div_producto'>
                <div className='comprobante__div_datos'>
                    <h3>{productos.name}</h3>
                    <h3>Cantidad: {productos.quantity}</h3>
                    <h3>Precio unitario: {productos.price}</h3>
                </div>
                <img src={productos.url} alt={productos.name} className='comprobante__img'/>
            </div>
    )
}
