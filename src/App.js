import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from "./Header";
import ProductList from "./ProductList";

export default function App({products}) {
  return (
    <div>
      <Header />
      <div>
        <ProductList products={products}></ProductList>
      </div>
    </div>
  );
}


