import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
    const [displayForm, setDisplayForm] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage]= useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    function handleDisplayForm() {
        setDisplayForm(!displayForm);
    }

    function handleNameInput(event) {
        setName(event.target.value);
    }

    function handleImageInput(event) {
        setImage(event.target.value);
    }

    function handleCaloriesInput(event) {
        setCalories(event.target.valueAsNumber);
    }

    function handleServingsInput(event) {
        setServings(event.target.valueAsNumber);
    }

    function handleFormSubmit(event) {
        // Prevents the page from being reloaded
        event.preventDefault()
        console.log("Adding a food...");
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        console.log("this new object -> ", newFood)
        setName("");
        setImage("");
        setCalories("");
        setServings("");
        props.handleAddNewFood(newFood);
    }

  return (
    <>
    <button onClick={handleDisplayForm}>Add Food</button>
        { displayForm ?
        <form onSubmit={handleFormSubmit}>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={name} type="text" onChange={handleNameInput} id="name"/>
    
          <label>Image</label>
          <Input value={image} type="text" onChange={handleImageInput} id="image"/>
    
          <label>Calories</label>
          <Input value={calories} type="number" onChange={handleCaloriesInput} id="calories"/>
    
          <label>Servings</label>
          <Input value={servings} type="number" onChange={handleServingsInput} id="servings"/>
    
          <button type="submit">Create</button>
        </form> : <></>
        }
    </>
  );
}

export default AddFoodForm;
