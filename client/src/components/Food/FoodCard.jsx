import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodCard = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = () => {
        try {
            const response = axios.get('/getfoods'); // Replace '/api/foods' with your endpoint
            setFoods(response.foods);
        } catch (error) {
            console.error('jsx Error fetching foods:', error);
        }
    };

    const handleFoodSelection = (e) => {
        const selectedFood = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedFoods([...selectedFoods, selectedFood]);
        } else {
            const updatedSelectedFoods = selectedFoods.filter((food) => food !== selectedFood);
            setSelectedFoods(updatedSelectedFoods);
        }
    };

    const calculateTotalCalories = () => {
        let total = 0;
        selectedFoods.forEach((food) => {
            const selectedFood = foods.find((f) => f.name === food);
            if (selectedFood) {
                total += selectedFood.calories;
            }
        });
        setTotalCalories(total);
    };

    const handleSubmit = async () => {
        try {
            // Make a request to your backend to store the total calories for the day
            await axios.post('/api/calories', { totalCalories }); // Replace '/api/calories' with your endpoint
            alert('Calorie intake stored successfully!');
        } catch (error) {
            console.error('Error storing calorie intake:', error);
            alert('Failed to store calorie intake.');
        }
    };

    return (
        <div>
            <h1>Select What You Have Eaten</h1>
            <form>
                {foods.map((food) => (
                    <div key={food._id}>
                        <label>
                            <input type="checkbox" value={food.name} onChange={handleFoodSelection} />
                            {food.name} - {food.calories} calories
                        </label>
                    </div>
                ))}
                <button type="button" onClick={calculateTotalCalories}>
                    Calculate Total Calories
                </button>
                <div>Total Calories: {totalCalories}</div>
                <button type="button" onClick={handleSubmit}>
                    Save Calorie Intake
                </button>
            </form>
        </div>
    );
};

export default FoodCard;
