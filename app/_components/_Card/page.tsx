"use client";

import React from "react";
import Image from "next/image";
import { useProductContext } from "@/hooks/ProductContext";
import { Product } from "@/types/product";

const Card: React.FC = () => {
  const allProduct = useProductContext() as Product[];

  return (
    <div className="flex">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3">
        {allProduct.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <Image
                src={product?.imageUrl}
                alt={`image-${product?.name}`}
                width={150}
                height={150}
              />
              <h1 className="text-gray-700 mb-4">{product?.price}</h1>
              <h5 className="text-xl font-semibold mb-2">{product?.name}</h5>
              <div className="flex justify-between bg-[#F9F8F6] rounded-2xl">
                <p className="py-2 px-3">{product?.weight}</p>
                <button className="py-2 px-3">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Go somewhere
            </a>
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
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
