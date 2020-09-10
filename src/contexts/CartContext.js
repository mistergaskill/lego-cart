import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const initialCart = [
  { id: 10, name: "3x3 tile", price: 23, count: 2 }
];

function CartContextProvider({children}) {
  const [items, setItems] = useState(initialCart);

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