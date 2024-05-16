/*
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

  const sortProductsAscending = () => {
    const sortedProducts = [...allProduct].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setAllProduct(sortedProducts);
  };

  const sortProductsDescending = () => {
    const sortedProducts = [...allProduct].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setAllProduct(sortedProducts);
  };

  return { allProduct, sortProductsAscending, sortProductsDescending };
};
*/

// import { config } from "@/constants/url";
// import { Product } from "@/types/product";
// import { useEffect, useState } from "react";

// interface ProductGroup {
//   [key: string]: Product[];
// }

// const useProduct = () => {
//   const [products, setProduct] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [productGroup, setProductGroup] = useState<ProductGroup>();

//   useEffect(() => {
//     const fetchData = async () => {
//       // https://localhost:8080/products
//       const response = await fetch(
//         `${config.BASE_URL}${config.endpoints.products}`
//       );
//       const data = (await response.json()) as Product[];

//       const uniqueCategories = new Set(data.map((product) => product.category));
//       const categoriesArray = Array.from(uniqueCategories);
//       const groupData: ProductGroup = {};

//       console.log("Raw data: ", data);
//       console.log("Categories: ", categoriesArray);

//       categoriesArray.forEach((category) => {
//         const currentCategoryProducts = data.filter(
//           (product) => product.category === category
//         );
//         groupData[category] = currentCategoryProducts;
//       });

//       setProductGroup(groupData);
//       setCategories(categoriesArray);
//       setProduct(data);
//     };

//     fetchData();
//   }, []);

//   return { products, productGroup, categories };
// };

// export default useProduct;

import { config } from "@/constants/url";
import { Product } from "@/types/product";
import { useEffect, useState, useCallback } from "react";

interface ProductGroup {
  [key: string]: Product[];
}

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<ProductGroup>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${config.BASE_URL}${config.endpoints.products}`
      );
      const data = (await response.json()) as Product[];

      const uniqueCategories = new Set(data.map((product) => product.category));
      const categoriesArray = Array.from(uniqueCategories);
      const groupData: ProductGroup = {};

      categoriesArray.forEach((category) => {
        groupData[category] = data.filter(
          (product) => product.category === category
        );
      });

      setProductGroup(groupData);
      setCategories(categoriesArray);
      setProducts(data);
    };

    fetchData();
  }, []);

  const filterProductsByCategory = useCallback(() => {
    if (selectedCategory && productGroup) {
      return productGroup[selectedCategory];
    }
    return products;
  }, [selectedCategory, productGroup, products]);

  const selectCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  return {
    products,
    productGroup,
    categories,
    selectedCategory,
    selectCategory,
    filteredProducts: filterProductsByCategory(),
  };
};

export default useProduct;
