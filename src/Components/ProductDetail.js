import React from "react";
import {Link} from "react-router-dom";

export default function Home ({ title, price, image }){

    return (
        <div>
            <div className='product'>
                <div className='title'>Name: {title}</div>
                <div className='price'>Price: ${price}</div>
                <img src={image} alt={title} />
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
    );

}
