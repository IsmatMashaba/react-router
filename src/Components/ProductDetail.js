import React from "react";

/*import productList from "./Products";*/
import Products from "./Products";
const productList = [];
export default function ProductDetail() {
    return (
        <div>Product Details
            {productList.map((item)=>{
                return <Products key={item.id} item={item}/>
            })}

        </div>
    )
}
