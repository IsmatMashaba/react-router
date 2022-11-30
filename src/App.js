import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom"

import Home from "./Components/Home";
import Menu from "./Components/Menu";
import productList from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App">
    <h3>Router</h3>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/productDetails" element={<ProductDetail/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
