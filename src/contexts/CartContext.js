import React, { createContext, useState } from 'react';

export const CartContext = createContext()

function CartContextProvider({children}) {
  const [items, setItems] = useState([{name: 'barbie doll'}]);

  const contextValues = {
    addItem: (item) => setItems(items.concat([item])),
    // removeItem,
    items
  } 

  return ( 
    <CartContext.Provider value={contextValues} >
      { children }
    </CartContext.Provider>
  );
}

export default CartContextProvider;