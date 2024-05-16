import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export interface ProductModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  product,
  onClose,
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
      onClick={onClose}>
      <div
        className="bg-white shadow-md w-full h-full rounded-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={onClose}
          aria-label="Close modal">
          &times;
        </button>
        <div className="p-6 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={`image-${product.name}`}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="font-semibold mb-2 ms-12">
          <h5 className="text-xl">{product.name}</h5>
          <p className="text-md">In {product.metadata.weight} grams</p>
        </div>
        <div className="flex justify-around gap-2 mx-auto">
          <div className="block text-center">
            <p className="text-gray-700">calorie</p>
            <p className="text-gray-700 text-sm">{product.metadata.calorie}</p>
          </div>
          <div className="block text-center">
            <p className="text-gray-700">proteins</p>
            <p className="text-gray-700 text-sm">{product.metadata.proteins}</p>
          </div>
          <div className="block text-center">
            <p className="text-gray-700">carbs</p>
            <p className="text-gray-700 text-sm">{product.metadata.carbs}</p>
          </div>
          <div className="block text-center">
            <p className="text-gray-700">fats</p>
            <p className="text-gray-700 text-sm">{product.metadata.fats}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer"
            onClick={onPrevious}
            disabled={isPreviousDisabled}
            aria-label="Previous product">
            <FaArrowAltCircleLeft />
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer"
            onClick={onNext}
            disabled={isNextDisabled}
            aria-label="Next product">
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
