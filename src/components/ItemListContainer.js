import React, {useEffect, useState} from 'react'
import preloader from '../multimedia/spinner.gif'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { getDocs, collection, query, where} from 'firebase/firestore'


export default function Item({greeting}) {
    const [products, setProducts] = useState([])
    const {nameCategory} = useParams()

    useEffect(()=>{

        const productsCollection = collection(db, 'products')
        const qCategory = nameCategory ? query(productsCollection, where('category', '==', nameCategory)) : productsCollection;

        getDocs(qCategory)
        .then(data => {
            const listProduct = data.docs.map(product => {
                return{
                    ...product.data(),
                    id: product.id,
                }
            });
            setProducts(listProduct)
        })
    }, [nameCategory])
    
    return (
        <>
            <h1 className='greeting'>{nameCategory === undefined ? greeting : nameCategory}</h1>     
            {products.length ? <ItemList products={products}/> : (
            <div className='div__preloader'>
                <img src={preloader} alt='cargando' className=''/>
            </div>
            )}
            
        </>
        );
};
