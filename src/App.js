import logo from './logo.svg';
import './App.css';

import React, { Component }  from 'react';
import './Components/Product/Product.css'
import {Routes,Route} from "react-router-dom"


import Home from "./Components/Home";
import Menu from "./Components/Menu";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path='/products' element= {<ProductList />}></Route>
         <Route path="/products/:productId" element={<ProductDetail/>}></Route>
      </Routes>

    </div>
  );
}



export default App;
