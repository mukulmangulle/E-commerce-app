import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {

  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id));
  }

  return (
    <div className="cart-item" >
      <img className="cart-img"   src={cartItem.thumbnail}
        alt=""
      />
      <span>
        <h1>{cartItem.title}</h1>
        <h3>Rate : ${cartItem.price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(cartItem.id)}>Remove Item</button>
    </div>
  );
};

export default CartItem;
