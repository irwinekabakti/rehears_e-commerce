"use client";
// Category.tsx
import React, { useState, useRef, useEffect } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && selectedCategory) {
      const categoryIndex = categories.indexOf(selectedCategory);
      const button = containerRef.current.children[
        categoryIndex + 1
      ] as HTMLElement;
      if (button) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = button.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonRight = buttonLeft + buttonWidth;
        if (buttonRight > containerWidth) {
          setScrollPosition(buttonRight - containerWidth);
        } else if (buttonLeft < scrollPosition) {
          setScrollPosition(buttonLeft);
        }
      }
    }
  }, [selectedCategory, categories, scrollPosition]);

  return (
    <>
      <nav className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around md:justify-between">
        <div className="py-4 flex justify-center md:justify-start md:ms-5">
          <h1 className="text-2xl cursor-pointer">Categories</h1>
        </div>

        <div className="pt-6 text-center md:gap-4 flex md:hidden">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around py-4">
        <div
          className="flex gap-2 overflow-x-auto whitespace-nowrap"
          ref={containerRef}
          style={
            {
              scrollBehavior: "smooth",
              margin: "0 15px",
              scrollLeft: scrollPosition,
            } as React.CSSProperties
          }>
          <button
            className={`px-3 py-1 rounded ${
              selectedCategory === null
                ? "underline underline-offset-8	text-blue-950"
                : "bg-[#fff]"
            }`}
            onClick={() => onCategorySelect(null)}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded ${
                selectedCategory === category
                  ? "underline underline-offset-8	text-blue-950"
                  : "bg-[#fff]"
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
