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
  
  // When clicked remove the <li> (spicy food), food's heat level is incremented by 1
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
  /* // When clicked remove the <li> (spicy food) from DOM
  function handleLiClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }
  */

  const [filterBy, setFilterBy] = useState("All");

  function handleFilterChange(event){
    setFilterBy(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  // Take an Array and create DOM elements to be rendered in the <ul>
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
