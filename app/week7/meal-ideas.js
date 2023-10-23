"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data;
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
    loadMeals();
  }, []);

  return (
    <div>
      <h1>List of Meals using {ingredient}</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data;
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
    loadMeals();
  }, []);

  return (
    <div>
      <h1>List of Meals using {ingredient}</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}