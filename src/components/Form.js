import React from 'react'
import { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function Form() {
    const {cart, total} = useContext(CartContext)

    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [correo, setCorreo] = useState()
    const [direccion, setDireccion] = useState()
    const [departamento, setDepartamento] = useState('')
    const [numeroTarjeta, setnumeroTarjeta] = useState()
    const [fechaExpiracion, setfechaExpiracion] = useState()
    const [cvv, setCVV] = useState()
    const [idBuy, setidBut] = useState()

    const getName = (e) =>{
        setNombre(e.target.value)
    }
    const getSurname = (e) =>{
        setApellido(e.target.value)
    }
    const getAdress = (e) =>{
        setDireccion(e.target.value)
    }
    const getEmail = (e) =>{
        setCorreo(e.target.value)
    }
    const getFloor = (e) =>{
        setDepartamento(e.target.value)
    }
    const getCardNumber = (e) =>{
        const cardNumber = e.target.value
        setnumeroTarjeta(cardNumber)
    }
    const getCardDate = (e) =>{
        const cardDate = e.target.value
        setfechaExpiracion(cardDate)
    }
    const getCardCVV = (e) =>{
        const cardCVV = e.target.value
        setCVV(cardCVV)

    }

    const buyer = {
        nombre,
        apellido,
        correo,
        direccion,
        departamento,
        numeroTarjeta,
        fechaExpiracion,
        cvv,
        total,
    }

    const handlerBuy = (e) =>{
        e.preventDefault()

        const sellCollection = collection(db, 'sells');
        addDoc(sellCollection, 
                {
                buyer,
                productos: cart,
                total,
                hora: serverTimestamp(),
            })
            .then(data => {
                const idBuy = data.id
                console.log("ID de compra:" , idBuy)
                alert(idBuy)
            })
            .catch(error => console.log(error))
            
            e.target.reset()
    }

    return (        
    <>
        {cart.length > 0 ? 
        <form action="" id='form__sell' onSubmit={handlerBuy}>
        <div className='form__div'>
            <h2 className='form__title'>Datos personales</h2>
            <h3 className='form__total'>Total: ${total.toFixed(3)}</h3>
            <input type="text" placeholder='Nombre'className='input__form_sell' onChange={getName} required/>
            <input type="text" placeholder='Apellido'className='input__form_sell' onChange={getSurname} required/>
            <input type="email" placeholder='Correo electrónico'className='input__form_sell' onChange={getEmail} required/>
            <input type="text" placeholder='Dirección' className='input__form_sell' onChange={getAdress} required/>
            <input type="text" placeholder='Piso / Departamento' className='input__form_sell' onChange={getFloor}/>
        </div>
        <div className='form__div'>
            <h2 className='form__title'>Tarjeta</h2>
            <input type="text" name="" id="card_number" placeholder='1234 1234 1234 1234' className='input__form_sell' onChange={getCardNumber} required minLength={'16'} maxLength={'16'}/>
            <input type="text" name="" id="card_date"  className='input__form_sell' placeholder='MM/AA' onChange={getCardDate} required minLength={'5'} maxLength={'5'}/>
            <input type="text" placeholder='CVV' id='card_CVV' className='input__form_sell' onChange={getCardCVV} required  minLength={'3'} maxLength={'3'}/>
            <button type='submit' className='form_btn_comprar' onSubmit={handlerBuy}>COMPRAR</button>
        </div>
    </form> 
    : 
    <div className='form__error'>
        <h2 className='form__error_text'>No tienes ningún producto agregado al carrito.</h2>
        <Link to={'/'}>Ver productos</Link>
    </div>
        }
    </>
    )
}
