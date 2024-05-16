"use client";

import React, { useState } from "react";
import Category from "../_components/_Category/page";
import Card from "../_components/_Card/page";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <main className="home">
      <Category
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <Card selectedCategory={selectedCategory} />
    </main>
  );
};

export default Home;
