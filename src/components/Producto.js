import React from 'react'
import myImg from '../multimedia/Playstation5.jpg'
import myImg_2 from '../multimedia/NintendoSwitch.jpg'

export default function Producto() {
    
    const productos = [
        {id: 1, nombre: "Playstation 5", url: myImg , descripcion: "Consola de videojuegos de última generación con rendimiento superior, diseño atractivo, juegos exclusivos y tecnología avanzada.", precio: "$342.999"},
        {id: 2, nombre: "Nintendo Switch", url: myImg_2 , descripcion: "Nintendo Switch es una consola híbrida portátil y de mesa con una amplia variedad de juegos y opciones de juego en línea.", precio: "$222.999"}
]

const carrito = []

    return (
        <div className='contenedor__productos'>
        {
            productos.map((producto) => {

                return (
                        <div key={producto.key} className='div__producto'>
                            <h2>{producto.nombre.toUpperCase()}</h2>
                            <img src={producto.url} alt="" className='producto__img'/>
                            <p>{producto.descripcion}</p>
                            <h3>{producto.precio}</h3>
                            <button className='btn__agregar' onClick={() => {console.log("Carrito" , carrito); return carrito.push(producto)}}>AGREGAR AL CARRITO</button>
                        </div>
                )
            })
        }
    </div>
    )
}
