import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="product">
      <img src={product.thumbnail} alt="" />
      <h1 className="product-h1">{product.title} </h1>
      <span>
        <h3 className="price">Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>Add to cart</button>
      </span>
    </div>
  );
};

export default ProductCard;
