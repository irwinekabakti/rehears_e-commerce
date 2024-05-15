import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { BsSortAlphaUpAlt, BsSortAlphaDownAlt } from "react-icons/bs";

const Category: React.FC = () => {
  return (
    <>
      <nav className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around md:justify-between">
        <div className="py-4 flex justify-center">
          <h1 className="text-2xl cursor-pointer">Vegetables</h1>
        </div>

        <div className="pt-6 text-center md:gap-4 flex md:hidden">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 md:items-center justify-around py-4">
        <ul className="flex justify-center gap-4 md:gap-2 my-auto">
          <li className="mx-auto md:mx-4">
            <Link href="/">All</Link>
          </li>
          <li className="mx-auto md:mx-4">
            <Link href="/">Spicy</Link>
          </li>
          <li className="mx-auto md:mx-4">
            <Link href="/">Dressings</Link>
          </li>
          <li className="mx-auto md:mx-4">
            <Link href="/">Sweets</Link>
          </li>
          <li className="mx-auto md:mx-4">
            <Link href="/">Roots</Link>
          </li>
        </ul>
        <div className="text-center hidden md:flex md:justify-start ms-12 gap-4">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Category;
