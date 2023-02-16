import React from "react";
import Item from "./Item";

export default function ItemList({products}) {
    return (
    <div className="contenedor__productos">
        {products.map(product =>{return <Item key={product.id} product={product}/>})}
    </div>
    )
}
