import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProducts(data);
    };
    fetchProducts();
  },[]);
  return (
    <ProductContext.Provider value={{products,loading}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
