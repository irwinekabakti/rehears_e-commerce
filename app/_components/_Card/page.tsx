"use client";
// Card.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductModal from "../(shared)/ProductModal";
import useProduct from "@/hooks/useProduct";

interface CardProps {
  selectedCategory: string | null;
}

const Card: React.FC<CardProps> = ({ selectedCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProductIndex, setCurrentProductIndex] = useState<number | null>(
    null
  );
  const { filteredProducts, categories } = useProduct();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (index: number) => {
    setCurrentProductIndex(index);
    setIsModalOpen(true);
  };

  const showNextProduct = () => {
    if (
      currentProductIndex !== null &&
      currentProductIndex < filteredProducts.length - 1
    ) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  const showPreviousProduct = () => {
    if (currentProductIndex !== null && currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };

  // Filter products based on selected category
  const displayedProducts = selectedCategory
    ? filteredProducts.filter(
        (product) => product.category === selectedCategory
      )
    : filteredProducts;

  // If 'all' is selected, group products by category
  const groupedProducts =
    selectedCategory === "All"
      ? categories.map((category) => ({
          category,
          products: filteredProducts.filter(
            (product) => product.category === category
          ),
        }))
      : [{ category: selectedCategory, products: displayedProducts }];

  return (
    <div className="flex">
      {groupedProducts.map((group) => (
        <div key={group.category}>
          <h1 className="text-2xl font-semibold mb-4">{group.category}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 mx-auto">
            {group.products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => openModal(index)}>
                  <Image
                    src={product.imageUrl}
                    alt={`image-${product.name}`}
                    width={150}
                    height={150}
                  />
                  <h1 className="text-gray-700 mb-4">{product.price * 1000}</h1>
                  <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
                  <div className="flex justify-between bg-[#F9F8F6] rounded-2xl">
                    <p className="py-2 px-3">{product.weight / 1000} kg</p>
                    <button className="py-2 px-3">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ProductModal
        isOpen={isModalOpen}
        product={
          currentProductIndex !== null
            ? displayedProducts[currentProductIndex]
            : null
        }
        onClose={closeModal}
        onPrevious={showPreviousProduct}
        onNext={showNextProduct}
        isPreviousDisabled={currentProductIndex === 0}
        isNextDisabled={currentProductIndex === displayedProducts.length - 1}
      />

      <div className="info hidden lg:block">
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-4">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">
              Special title treatment info
            </h5>
            <p className="text-gray-700 mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-4">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">
              Special title treatment info
            </h5>
            <p className="text-gray-700 mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
