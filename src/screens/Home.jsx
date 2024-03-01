import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ProductsContainer from "../components/ProductsContainer";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <HeroSection />
      <ProductsContainer />
    </>
  );
};

export default Home;
