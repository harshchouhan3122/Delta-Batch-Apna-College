import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Product.css'
import './ProductTab.css'
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"

function Title() {
  return (
    <h1>Hello World!</h1>
  )
}

function App() {

  return (
    // <h1>This is Our First React App!</h1>
    <div>
        <Title/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident.</p>
        <Title/>

        <Product/>
        <ProductTab/>
    </div>
  );
}

export default App;
