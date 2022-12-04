import React from "react";
import { Link } from "react-router-dom";

export default function Product({ item}){
    return <div>

        <div>Name: {item.title}</div>
        <div>Price: {item.price}</div>
        <div className='image'>
            <img src={item.image} alt={item.title} />
        </div>

        <Link to= {`/products/${item.id}`}>More detail</Link>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>;
}

