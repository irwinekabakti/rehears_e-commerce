import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsSortAlphaUpAlt, BsSortAlphaDownAlt } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around">
        <div className="py-4 text-center">
          <h1 className="text-2xl cursor-pointer">Vegetables</h1>
        </div>

        <div className="flex pt-6 text-center gap-4">
          <BsSortAlphaDownAlt className="cursor-pointer" />
          <IoSearch className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
