import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const { isLoading, isError, isSuccess, message, products } = useSelector(
    (state) => state.product
  );

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  if (isError || message) {
    return (
      <div className="container">
        <h1 className="all-products-title">{message}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
