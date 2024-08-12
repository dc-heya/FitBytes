import React from 'react';

const BMR = (props) => {
    const { age, weight, height, gender, exercisefreq } = props;

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMR based on gender
    let bmr;
    if (gender === 'male') {
        bmr = (9.65 * weight) + (573 * heightInMeters) - (5.08 * age) + 260;
    } else {
        bmr = (7.38 * weight) + (607 * heightInMeters) - (2.31 * age) + 43;
    }

    // Calculate total calories burned per day
    const totalCalories = bmr * getActivityMultiplier(exercisefreq);
    // localStorage.setItem('totalCalories', totalCalories.toFixed(2));

    return (
        <div className='alert alert-primary d-flex flex-column align-items-center justify-content-center font-weight-bold text-center' style={{height : '175px'}}>
            {/* <p>Age: {age} years</p>
            <p>Weight: {weight} kg</p>
            <p>Height: {height} cm</p>
            <p>gender: {gender}</p>
            <p>Activity Level: {exercisefreq}</p> */}
            <p>BMR : {bmr.toFixed(2)} calories/day</p>
            <p>Total Daily Energy Expenditure (TDEE): {totalCalories.toFixed(2)} calories/day</p>
        </div>
    );
}

// Function to get activity multiplier based on activity level
const getActivityMultiplier = (exercisefreq) => {
    switch (exercisefreq) {
        case 'sedentary':
            return 1.2;
        case 'lightlyActive':
            return 1.37;
        case 'moderatelyActive':
            return 1.55;
        case 'veryActive':
            return 1.725;
        case 'extraActive':
            return 1.9;
        case 'none':
            return 1.2;
        default:
            return 1.2;
    }
}

export default BMR;
