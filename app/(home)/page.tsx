import React from "react";
import Category from "../_components/_Category/page";
import Card from "../_components/_Card/page";
// import { ProductProvider } from "@/hooks/ProductContext";

const Home = () => {
  return (
    // <ProductProvider>
    <main className="home">
      <Category />
      <Card />
    </main>
    // </ProductProvider>
  );
};

export default Home;
