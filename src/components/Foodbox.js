import React from 'react'
import { useState } from 'react';
import { Card, Col, Button } from 'antd';
import foodsData from '../foods.json';
import AddFoodForm from './AddFoodForm.js';
import SearchBar from './SearchBar';



function Foodbox() {
    const [foods, setFoods] = useState(foodsData);
    const [filteredFoods, setFilteredFoods] = useState(foodsData);

    function handleAddNewFood(newFood) {
        setFoods([newFood, ...foods]);
    }

    function handleFilterFood(keyword) {
        const filteredFoods = foods.filter((food) => {
            return food.name.toLowerCase().includes(keyword.toLowerCase());
        })
        setFilteredFoods(filteredFoods);
        setFoods(filteredFoods);
    }

    function handleDeleteFood(foodName) {
        checkIfEmpty();
        const notdeleted = [...foods].filter((food) => {
            return food.name !== foodName;
        });
        setFilteredFoods(notdeleted);
        setFoods(notdeleted);
    }

    function checkIfEmpty () {
        if(foods.length === 0) {
        <div>
             empty
        </div>
    }
    }

  return (
    <>
    <AddFoodForm handleAddNewFood={handleAddNewFood}/>
    <SearchBar handleFilterFood={handleFilterFood}/>
    <h3>Food List</h3>
    {filteredFoods.map(food => {
        return (
            <Col>
            {checkIfEmpty}
            <Card
                title={food.name}
                key={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
                >
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={() => handleDeleteFood(food.name)}> Delete </Button>
        </Card>
        </Col>
        )
      })}
      </>
  )
}

export default Foodbox