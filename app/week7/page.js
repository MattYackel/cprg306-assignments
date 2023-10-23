"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    //spread operator ... copies the existing array to add the new item
    setItems([...items, item]);
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link
        href="/"
        className="p-1 text-white bg-blue-500 rounded hover:bg-orange-400"
      >
        Home
      </Link>
    </main>
  );
}
