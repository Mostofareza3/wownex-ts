"use client";
import { createContext, useState } from "react";

interface ProductContextType {
  detailsProduct: any; // Replace 'any' with the actual type of detailsProduct
  setDetailsProduct: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type
  addDetailsProduct: (product: any) => void; // Replace 'any' with the actual type of product
}

export const ProductContext = createContext<ProductContextType>({
  detailsProduct: [],
  setDetailsProduct: () => {},
  addDetailsProduct: () => {},
});

const ProductStore = ({ children }:any) => {
  const [detailsProduct, setDetailsProduct] = useState([]);

  //   add product
  const addDetailsProduct = (product:any) => {
    setDetailsProduct(product);
  };

  const value: ProductContextType = {
    detailsProduct,
    setDetailsProduct,
    addDetailsProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductStore;
