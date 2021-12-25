import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodArr = [...foods, newFood];
    setFoods(newFoodArr)
  }

  function handleLiClick(id){
    const newFoodArr = foods.map((food) => {
      if (food.id === id){
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        }
      } else {
        return food
      }
    })
    setFoods(newFoodArr)
  }
  /* version 1 click on li element to remove from DOM
  function handleLiClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }
  */

  // Take an Array and create DOM elements to be rendered in the <ul>
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
