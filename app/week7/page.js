"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import Meals from "./meal-ideas.js";

export default function page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    //spread operator ... copies the existing array to add the new item
    setItems([...items, item]);
  };
  const handleItemSelect = (item) => {
    const words = item.name.split(" ");
    const ingredient = words[0].trim();
    const cleanIngredient = ingredient.replace(/,/g, "");
    //console.log(cleanIngredient);
    setSelectedItemName(cleanIngredient);
  };

  return (
    <main>
      <h1 className="p-4 text-3xl font-bold">Shopping List</h1>
      <div className="flex pl-2">
        <div className="flex-1  max-w-sm">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <Link
            href="/"
            className="p-1 text-white bg-blue-500 rounded hover:bg-orange-400"
          >
            Home
          </Link>
        </div>
        <div className="flex-1 pl-4">
          <Meals ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
