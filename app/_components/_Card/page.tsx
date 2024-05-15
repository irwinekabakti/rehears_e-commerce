"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProductContext } from "@/hooks/ProductContext";
import { Product } from "@/types/product";

const Card: React.FC = () => {
  const allProduct = useProductContext() as Product[];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 mx-auto">
        {allProduct.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden">
            <div
              className="p-6 cursor-pointer"
              onClick={() => openModal(product)}>
              <Image
                src={product?.imageUrl}
                alt={`image-${product?.name}`}
                width={150}
                height={150}
              />
              <h1 className="text-gray-700 mb-4">{product?.price * 1000}</h1>
              <h5 className="text-xl font-semibold mb-2">{product?.name}</h5>
              <div className="flex justify-between bg-[#F9F8F6] rounded-2xl">
                <p className="py-2 px-3">{product?.weight / 1000} kg</p>
                <button className="py-2 px-3">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div
          className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}>
          {/* <div className="bg-white shadow-md w-full h-full rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <Image
                src={selectedProduct?.imageUrl}
                alt={`image-${selectedProduct?.name}`}
                width={150}
                height={150}
              />
            </div>
            <div className="font-semibold mb-2 ms-12">
              <h5 className="text-xl ">{selectedProduct.name}</h5>
              <p className="text-md">
                In {selectedProduct.metadata.weight} grams
              </p>
            </div>
            <div className="flex justify-around gap-2 mx-auto">
              <div className="block text-center">
                <p className="text-gray-700">calorie</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.calorie}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">proteins</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.proteins}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">carbs</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.carbs}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">fats</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.fats}
                </p>
              </div>
            </div>
          </div> */}
          <div className="bg-white shadow-md w-full h-full rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Image
                  src={selectedProduct?.imageUrl}
                  alt={`image-${selectedProduct?.name}`}
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="font-semibold mb-2 ms-12">
              <h5 className="text-xl ">{selectedProduct.name}</h5>
              <p className="text-md">
                In {selectedProduct.metadata.weight} grams
              </p>
            </div>
            <div className="flex justify-around gap-2 mx-auto">
              <div className="block text-center">
                <p className="text-gray-700">calorie</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.calorie}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">proteins</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.proteins}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">carbs</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.carbs}
                </p>
              </div>
              <div className="block text-center">
                <p className="text-gray-700">fats</p>
                <p className="text-gray-700 text-sm">
                  {selectedProduct.metadata.fats}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
