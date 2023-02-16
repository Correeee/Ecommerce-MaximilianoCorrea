import React from 'react'
import imagen from '../multimedia/cargadorps5.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemDetail() {

  

  return (
    <div className='ItemDetail'>
            <div className='div__itemDetail'>
              <h3 className='itemDetail__title'>Cargador PS5</h3>
              <img src={imagen} alt="" className='itemDetail__img'/>
              <p className='itemDetail__description'>Carga hasta dos controladores inalambricos. Se conecta rapida y facilmente con el diseño de clic de la estacion de carga.</p>
              <h4 className='itemDetail__price'>$25.999</h4>
                <div className='div__btn_ItemQuantitySelector'>
                    <button className='btns__ItemQuantitySelector btn__min'>-</button>
                    <p className='btn__ItemQuantitySelector_number'>0</p>
                    <button className='btns__ItemQuantitySelector btn__max'>+</button>
                    <button className='btn__ItemQuantitySelector_Carrito'><ShoppingCartIcon/></button>
                </div>
            </div>
    </div>
  )
}
