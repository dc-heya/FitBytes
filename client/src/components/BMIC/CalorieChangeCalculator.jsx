import React from 'react';

const CalorieChangeCalculator = (props) => {
    const { currentWeightKg, goalWeightKg, goalMonths } = props;

    // Convert weights to pounds
    const currentWeightLbs = currentWeightKg * 2.20462;
    const goalWeightLbs = goalWeightKg * 2.20462;

    // Calculate total weight change in pounds
    const totalWeightChangeLbs = goalWeightLbs - currentWeightLbs;

    // Calculate total calorie change required based on the assumption of 3500 calories per pound
    const totalCalorieChange = totalWeightChangeLbs * 3500;

    // Convert months to weeks
    const totalWeeks = goalMonths * 4;

    // Calculate daily calorie change
    const dailyCalorieChange = totalCalorieChange / totalWeeks / 7;
    localStorage.setItem('dailycalgoal', dailyCalorieChange.toFixed(2));
    // Format calorie change message based on deficit or surplus
    let calorieChangeMessage;
    if (dailyCalorieChange < 0) {
        calorieChangeMessage = `Calorie Deficit: ${-dailyCalorieChange.toFixed(2)} calories/day`;
    } else if (dailyCalorieChange > 0) {
        calorieChangeMessage = `Calorie Surplus: ${dailyCalorieChange.toFixed(2)} calories/day`;
    } else {
        calorieChangeMessage = 'Maintain current calorie intake';
    }

    return (
        <div>           
            <p>You have to maintain a:</p>
            <p className='text-2xl font-weight-bold text-center'>{calorieChangeMessage}</p>
        </div>
    );
}

export default CalorieChangeCalculator;
