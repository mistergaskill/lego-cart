import React, { createContext, useState } from 'react';

export const CartContext = createContext()

function CartContextProvider({children}) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const matchingItemIndex = items.findIndex(x => x.id === item.id);
    const newCart = [...items];

    if (matchingItemIndex !== -1) {
      newCart[matchingItemIndex].count++
    } else {
      newCart.push({...item, count: 1})
    }

    setItems(newCart);
  };

  const contextValues = {
    addItem,
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