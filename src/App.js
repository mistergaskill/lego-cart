import React from 'react';
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import './App.css';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Catalog></Catalog>
        <Cart></Cart>
      </CartContextProvider>
    </div>
  );
}

export default App;
