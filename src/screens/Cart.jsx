import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";



const Cart = () => {

  const { cartItems } = useSelector((state) => state.cart)

  const total = cartItems.reduce((p,c)=> p+c.price, 0)

  return (
    <div className="cart-container">
      <div className="cart-items">
        {
          cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))
        }
      </div>

      <div className="bill-section">
        <h1>
          Total Amount : <br />
          <br />
          ${total}
        </h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
