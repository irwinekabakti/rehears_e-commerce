import React from "react";
import Navbar from "../_components/_Navbar/page";
import Category from "../_components/_Category/page";
import Card from "../_components/_Card/page";

const Home = () => {
  return (
    <main className="home">
      {/* <Navbar /> */}
      <Category />
      <Card />
    </main>
  );
};

export default Home;
