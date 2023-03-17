import React from 'react';
import logo from '.././multimedia/logo2.png'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'

export const Navbar = ({name})=>{
    const categorias = [
        {id: 1, name: 'Consolas', route:'/Categorias/Consolas'},
        {id: 2, name: 'Videojuegos', route:'/Categorias/Videojuegos'},
        {id: 3, name: 'Accesorios', route:'/Categorias/Accesorios'},
        {id: 4, name: 'ID', route:'/BuscarCompra'},
    ]

    return (
        <header className='navbar'>
            <Link to={'/'}><img src={logo} alt="logo" className='logo'/></Link>
            <h2 className='text__saludo'>¡Bienvenido/a {name}!</h2>
            <nav className='links'>
                {
                    categorias.map((categoria) =>{
                        return <NavLink to={categoria.route} key={categoria.id} className='nav__link'>{categoria.name}</NavLink>
                    })
                    
                }
            </nav>
            <CartWidget/>
        </header>
        
    )

}

