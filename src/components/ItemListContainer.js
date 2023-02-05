import React from 'react'
import Producto from './Producto'

export default function ItemListContainer({greeting}) {

  return (
    <>
    <h3 style={style.h3}>{greeting}</h3>
    </>
  )
}


/*No sé si con "estilos integrados" hace referencia a esto, pero la planilla de la hoja de ruta CREO que lo pedía de esta manera. Sin embargo, me parece MUY engorroso y prefiero hacerlo con css. Lo entrego así porque lo pedian de esta forma no más. Ni siquiera tiene un "predictivo" que te recuerde lo que queres hacer como si lo hace el archivo de CSS.*/

const style = {
  h3:{
    display: "Flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "3rem"
  }
}