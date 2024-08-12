import React, { useState } from 'react';
import axios from 'axios';

const WeightLossCard = ({ initialWeight, targetWeight, monthsToAchieve }) => {
        const [caloriesToBurn, setCaloriesToBurn] = useState(0);
    
        const calculateCaloriesToBurn = () => {
            // Assuming a pound of fat is roughly 3500 calories
            const caloriesPerPound = 3500;
            const totalWeightToLose = initialWeight - targetWeight;
            const totalWeeksToLose = monthsToAchieve * 4; // Assuming 4 weeks in a month
            const caloriesToBurnPerWeek = totalWeightToLose * caloriesPerPound / totalWeeksToLose;
            const caloriesToBurnPerDay = caloriesToBurnPerWeek / 7; // 7 days in a week
    
            setCaloriesToBurn(caloriesToBurnPerDay);
        }
    
        return (
            <div>
                <h2>Weight Loss Calculator</h2>
                <p>Initial Weight: {initialWeight} lbs</p>
                <p>Target Weight: {targetWeight} lbs</p>
                <p>Months to Achieve Goal: {monthsToAchieve} months</p>
                <button onClick={calculateCaloriesToBurn}>Calculate Calories to Burn Per Day</button>
                {caloriesToBurn > 0 && <p>Calories to Burn Per Day to Reach Target Weight: {caloriesToBurn.toFixed(2)} calories</p>}
            </div>
        );
    
}

export default WeightLossCard