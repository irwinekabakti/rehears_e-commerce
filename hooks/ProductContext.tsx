"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { config } from "@/constants/url";
import { Product } from "@/types/product";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextType {
  products: Product[];
  productGroup: { [key: string]: Product[] } | undefined;
  categories: string[];
  selectedCategory: string | null;
  selectCategory: (category: string | null) => void;
  filteredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<{
    [key: string]: Product[];
  }>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${config.BASE_URL}${config.endpoints.products}`
      );
      const data = (await response.json()) as Product[];

      const uniqueCategories = new Set(data.map((product) => product.category));
      const categoriesArray = Array.from(uniqueCategories);
      const groupData: { [key: string]: Product[] } = {};

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

  return (
    <ProductContext.Provider
      value={{
        products,
        productGroup,
        categories,
        selectedCategory,
        selectCategory,
        filteredProducts: filterProductsByCategory(),
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
