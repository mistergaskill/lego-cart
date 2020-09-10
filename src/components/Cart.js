import React, { useContext } from 'react'
import {CartContext} from '../contexts/CartContext'

function CartItem(item) {
  return (<div>{item.name}</div>)
}

function Cart() {
  const { items } = useContext(CartContext);

  return (<div>
    <h1>Cart</h1>
    {items.map(CartItem)}
  </div>)
}

export default Cart