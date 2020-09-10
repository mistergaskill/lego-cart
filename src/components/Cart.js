import React, { useContext } from 'react'
import {CartContext} from '../contexts/CartContext'
import './Cart.css';

function CartItem(item) {
  return (<div className="cartItem">
    <button className="cartItemButton">Remove</button>
    <span className="cartItemDescription">{item.name}</span>
    <div className="cartItemCountWidget">
      <button className="cartItemButton">-</button>
      <button className="cartItemButton">+</button>
      <div className="cartItemCount">{item.count}x</div>
    </div>
  </div>)
}

function Cart() {
  const { items } = useContext(CartContext);

  return (<div>
    <h1>Cart</h1>
    {items.map(CartItem)}
  </div>)
}

export default Cart;