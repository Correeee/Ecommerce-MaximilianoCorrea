import React from 'react';
import logo from '.././multimedia/logo2.png'
import CartWidget from './CartWidget';

export const Navbar = ({name})=>{


    const categorias = [
        {id: 1, name: "Categoría 1"},
        {id: 2, name: "Categoría 2"},
        {id: 3, name: "Categoría 3"},
    ]

    return (
        <header className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <h2 className='text__saludo'>¡Bienvenido/a {name}!</h2>
            <nav className='links'>
                <a href='' className='nav__link'>Inicio</a>
                {
                    categorias.map((categoria) =>{
                        return <a href='' key={categoria.id} className='nav__link'>{categoria.name}</a>
                    })
                    
                }
            </nav>
            <CartWidget/>

        </header>
        
    )

}

