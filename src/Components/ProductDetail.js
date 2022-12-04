import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

export default function ProductDetail(){


        const productId=useParams();

      
        const url=`https://fakestoreapi.com/products/${productId.productId}`
        const [productDetail, setProductDetail]=useState({})

        useEffect(()=>{
            function getData (){
                fetch(url)
                .then((res)=>res.json())
                .then((data)=>setProductDetail(data))
            }
            getData();
        },[url])

 
        // 2nd way
        // const catchFetch = useCallback(getData, [url])

        //  useEffect(()=>{
        //     catchFetch()
        //    },[catchFetch])

          console.log(productDetail)
          return (
            
              <div>
                 <div>Title: {productDetail.title}</div> 
                 <div>Description: {productDetail.description}</div> 
                 <div>Category: {productDetail.category}</div>
                 
                 
                <Link to= '/'>Back to Home</Link></div>
          )

}



