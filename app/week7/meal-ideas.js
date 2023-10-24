"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  console.log(ingredient);
  console.log(data.meals);
  return data.meals;
}

export default function Meals({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMeals() {
    try {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (ingredient) {
      loadMeals();
    }
  }, [ingredient]);

  return (
    <div>
      {ingredient ? (
        <h1 className="text-2xl font-bold">List of Meals using {ingredient}</h1>
      ) : (
        <h1 className="text-2xl font-bold">
          Select an item from the list to see recipe suggestions {ingredient}
        </h1>
      )}
      <ul>
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="my-1 px-2 bg-slate-700 rounded hover:bg-orange-500 cursor-pointer max-w-sm"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
