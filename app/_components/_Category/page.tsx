"use client";
// Category.tsx
import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import useProduct from "@/hooks/useProduct";

interface CategoryProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const Category: React.FC<CategoryProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  const { categories } = useProduct();

  return (
    <>
      <nav className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around md:justify-between">
        <div className="py-4 flex justify-center">
          <h1 className="text-2xl cursor-pointer">Categories</h1>
        </div>

        <div className="pt-6 text-center md:gap-4 flex md:hidden">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around py-4">
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => onCategorySelect(null)}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => onCategorySelect(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="text-center hidden md:flex md:justify-start ms-12 gap-4">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Category;
