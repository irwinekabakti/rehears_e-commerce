// useProduct.js
"use client";
import { useState, useEffect } from "react";
import { config } from "@/constants/url";
import { Product } from "@/types/product";

export const useProduct = () => {
  const [allProduct, setAllProduct] = useState<Product[]>([]);

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

  // Sort products by name in ascending order
  const sortProductsAscending = () => {
    const sortedProducts = [...allProduct].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setAllProduct(sortedProducts);
  };

  // Sort products by name in descending order
  const sortProductsDescending = () => {
    const sortedProducts = [...allProduct].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setAllProduct(sortedProducts);
  };

  return { allProduct, sortProductsAscending, sortProductsDescending };
};
