import React from "react";
import { Link } from "react-router-dom";

export default function Product({ item}){
    return <div>Product
        console.log(item)

        <div>{item.title}</div>
        <div>{item.price}</div>
        <Link to= {`/products/${item.id}`}>More detail</Link>

    </div>;
}
