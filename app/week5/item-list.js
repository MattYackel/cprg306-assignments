"use client";

import Item from "./item";
import { useState } from "react";
import data from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("category");

  if (sortBy === "name") data.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "category")
    data.sort((a, b) => a.category.localeCompare(b.category));

  const handleNameClick = () => {
    setSortBy("name");
  };
  const handleCategoryClick = () => {
    setSortBy("category");
  };

  //button color change
  var nameColor = sortBy === "name" ? "bg-orange-500" : "bg-blue-600";
  var categoryColor = sortBy === "category" ? "bg-orange-500" : "bg-blue-600";
  nameColor = nameColor + " mx-1 p-1 text-white rounded hover:bg-orange-400";
  categoryColor =
    categoryColor + " mx-1 p-1 text-white rounded hover:bg-orange-400";

  return (
    <>
      <button
        //className="mx-1 p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
        className={nameColor}
        onClick={handleNameClick}
      >
        Sort by name
      </button>
      <button
        //className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
        className={categoryColor}
        onClick={handleCategoryClick}
      >
        Sort by Category
      </button>
      {data.map((item) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </>
  );
}
