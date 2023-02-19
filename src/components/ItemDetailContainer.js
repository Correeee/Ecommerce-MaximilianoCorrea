import React from 'react'
import Playstation5 from '../multimedia/Playstation5.jpg'
import NintendoSwitch from '../multimedia/NintendoSwitch.jpg'
import DSXL from '../multimedia/3dsxl.jpg'
import XboxS from '../multimedia/xboxs.jpg'
import MarioBros from '../multimedia/mariobros.jpg'
import Kirby from '../multimedia/kirby.jpg'
import EldenRing from '../multimedia/eldenring.jpg'
import GodOfWar from '../multimedia/godofwar.jpg'
import Cargadorps5 from '../multimedia/cargadorps5.jpg'
import Funda3DSXL from '../multimedia/funda3ds.jpg'
import AuricularesXBOX from '../multimedia/auricularesxbox.jpg'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const initialProducts = [
  {id: 1, name: "Playstation 5", url: Playstation5 , description: "Consola de Videojuegos de última generación con rendimiento superior, diseño atractivo, juegos exclusivos y tecnología avanzada.", price: "$342.999", category: "Consolas"},
  {id: 2, name: "Nintendo Switch", url: NintendoSwitch , description: "Nintendo Switch es una consola híbrida portátil y de mesa con una amplia variedad de juegos y opciones de juego en línea.", price: "$222.999", category: "Consolas"},
  {id: 3, name: "Nintendo 3DS XL", url: DSXL , description: "Consola portátil de Videojuegos en 3D con juegos clásicos.", price: "$95.999", category: "Consolas"},
  {id: 4, name: "", url: XboxS , description: "Consola de Videojuegos de la marca Xbox con gráficos avanzados y juegos en línea.", price: "$149.999", category: "Consolas"},
  {id: 5, name: "Super Mario Bros. 2", url: MarioBros , description: "Super Mario Bros. 2 es un juego de plataformas clásico de Nintendo, lanzado originalmente en 1988 y relanzado para la consola portátil Nintendo 3DS XL.", price: "$29.999", category: "Videojuegos"},
  {id: 6, name: "Kirby Triple Deluxe", url: Kirby , description: "Kirby Triple Deluxe es un juego de plataformas de Nintendo para 3DS XL protagonizado por Kirby, quien debe salvar a Dream Land de Taranza y su ejército de insectos.", price: "$27.999", category: "Videojuegos"},
  {id: 7, name: "Elden Ring", url: EldenRing , description: "El juego presenta un mundo de fantasía oscuro y peligroso, donde los jugadores pueden explorar libremente y enfrentar desafiantes enemigos en tiempo real.", price: "$49.999", category: "Videojuegos"},
  {id: 8, name: "God Of War: Ragnarök Standard Edition", url: GodOfWar , description: "Es un juego de acción y aventura en el que el jugador controla a Kratos en su misión.", price: "$45.999", category: "Videojuegos"},
  {id: 9, name: "Cargador PS5", url: Cargadorps5 , description: "Carga hasta dos controladores inalambricos. Se conecta rapida y facilmente con el diseño de clic de la estacion de carga.", price: "$25.999", category: "Accesorios"},
  {id: 10, name: "Funda 3DS XL", url: Funda3DSXL , description: "La funda para 3DS XL es diseñada para proteger tu consola de cualquier daño físico.", price: "$19.999", category: "Accesorios"},
  {id: 11, name: "Auriculares XBOX S", url: AuricularesXBOX , description: "Proporciona una experiencia de audio inmersiva para los juegos. Diseñados específicamente para su uso con Xbox Series S.", price: "$26.999", category: "Accesorios"},
];

const queryProducts = new Promise((resolve, reject) => {
  setTimeout(()=>{
      resolve(initialProducts);
  }, 3000)

      // reject("Data no recibida.");
  })

export default function ItemDetailContainer({cart}) {
  const [products, setProducts] = useState([])

  const {idProduct} = useParams()
  console.log(idProduct)


  useEffect(()=>{
    queryProducts
        .then((data) =>{
            data = data.find(producto => 
              producto.id == idProduct);
            setProducts(data);
        })
        .catch((error)=>{
            console.error("ERROR:" , error);
        })

}, [])

  return (
    <div className='ItemDetailContainer'>
      <h3 className='category__title'>{products.category}</h3>
      <ItemDetail product={products} cart={cart}/>
    </div>
  )
}
