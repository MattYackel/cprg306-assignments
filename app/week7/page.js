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
    //filter out emojis using unicode value ranges
    const nameNoEmoji = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    //filter out commas
    const nameNoComma = nameNoEmoji.replace(/,/g, "");
    /* filter out numbers and units:
       /\d+ - matches any number
       \s? - matches any whitespace character
       (kg|g|L|pack) - matches any of the units
       /g - matches all instances 
       .trim() - remove whitespace from beginning and end  */
    const nameCleaned = nameNoComma
      .replace(/\d+(\s?(kg|g|L|pack)?)|dozen/g, "")
      .trim();
    /*  remove last letter if 's'
    s - matches any 's'
    $ - matches end of string  */
    const name = nameCleaned.replace(/s$/, "");
    //console.log(name);
    setSelectedItemName(name);
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
