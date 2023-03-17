import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'
import ItemBusqueda from './ItemBusqueda'

export default function BuscarCompra() {

    const [idBusqueda, setidBusqueda] = useState()
    const [input, setInput] = useState()
    const [listBuyers, setlistBuyers] = useState('')

    const handlerInput = (event) =>{
        setInput(event.target.value)
    }

    const handlerClick = (event) =>{
        event.preventDefault()
        setidBusqueda(input)
    }

    useEffect(()=>{

        const buyersCollection = collection(db, 'sells')
        const qCategory = buyersCollection;

        getDocs(qCategory)
        .then(data => {
            const list = data.docs.map(data => {
                return {
                    id: data.id,
                    productos: data.data().productos,
                    total: data.data().total,
                }
            }).filter(data => data.id == idBusqueda)
            setlistBuyers(list)
        })
    }, [idBusqueda])

    return (
    <div className='buscarCompra'>
        <h2 className='buscarCompra__title'>BUSCÁ TU COMPRA</h2>
        <form action="" className='buscarCompra__form'>
            <input type="text" name="" id="input_buscador" placeholder='ID DE COMPRA' value={input} onChange={handlerInput}/>
            <button onClick={handlerClick} id='btn_buscador'>BUSCAR</button>
        </form>
        {listBuyers == '' ? <div className='compra__noencontrada'><h2 className='compra__noencontrada_text'>COMPRA NO ENCONTRADA</h2></div>
        : 
        <>
        <h2>COMPROBANTE DE COMPRA</h2>
            <>
                {listBuyers.map((data) =>{
                    console.log(data)
                    return (
                        <>
                            <h2>ID de compra: {data.id}</h2>
                                <div className='div__producto_busqueda'>
                                {
                                    listBuyers[0].productos.map((datos, i)=> {
                                        console.log(datos, i);
                                        return(
                                            <ItemBusqueda key={i} productos={datos}/>
                                        )
                                    })
                                }
                                </div>
                            <h2 className='busqueda__total'>Total: ${data.total.toFixed(3)}</h2>
                        </>
                    )
                })}
            </>
            
            
        </>
        }
    </div>
    )
}
