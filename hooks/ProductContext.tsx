// ProductContext.js
"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { config } from "@/constants/url";
import { Product } from "@/types/product";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextType extends Array<Product> {}

const ProductContext = createContext<ProductContextType>([]);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [allProduct, setAllProduct] = useState<any[]>([]);

  const getAPI = `${config.BASE_URL}${config.endpoints.products}`;

  const fetchData = () => {
    fetch(getAPI)
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={allProduct}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
