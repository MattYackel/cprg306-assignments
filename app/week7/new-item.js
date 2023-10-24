"use client";

import { useState } from "react";

export default function Item({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity("");
    setCategory("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="mb-2 p-2 rounded bg-slate-700 max-w-sm">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
        <input
          required
          type="text"
          placeholder="Item Name"
          onChange={handleNameChange}
          value={name}
          className="h-7 col-span-2 w-full px-1 bg-zinc-800 block text-white rounded"
        ></input>
        <input
          required
          type="number"
          min="1"
          max="99"
          placeholder="Quantity"
          onChange={handleQuantityChange}
          value={quantity}
          className="h-7 w-full px-1 bg-zinc-800 text-white rounded"
        ></input>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="col-span-2 h-7 w-full bg-zinc-800 px-1 text-white rounded"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
        <button
          type="submit"
          className="h-7 text-white bg-blue-500 rounded hover:bg-orange-400"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
