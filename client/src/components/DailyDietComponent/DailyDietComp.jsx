import React from 'react';
import DailyDietRender from './DailyDietRender';
import DailyDietLandingPage from './DailyDietLandingPage';

const DailyDietComp = (props) => {
    const userDetails = props.userdetails;
    const weight = userDetails.weight;
    const height = userDetails.height / 100;
    const age = userDetails.age;
    const gender = userDetails.gender;
    const activity_level = userDetails.exercisefreq;


    const diseases= userDetails.diseases
    console.log('details from user in the main page of dailydietcomp where dailydietrender is called')
    console.log(props.userdetails)

    // Function to calculate BMR
    const calculateBMR = (weight, height, age, gender) => {
        let bmr;
        if (gender === 'male') {
            bmr = (9.65 * weight) + (573 * height) - (5.08 * age) + 260;
        } else {
            bmr = (7.38 * weight) + (607 * height) - (2.31 * age) + 43;
        }
        return bmr;
    }

    // Function to calculate daily calorie requirement
    const calculateCalories = (bmr, activityLevel) => {
        switch (activityLevel) {
            case 'sedentary':
                return bmr * 1.2;
            case 'lightlyActive':
                return bmr * 1.37;
            case 'moderatelyActive':
                return bmr * 1.55;
            case 'veryActive':
                return bmr * 1.725;
            case 'extraActive':
                return bmr * 1.9;
            case 'none':
                return bmr * 1.2;
            default:
                return bmr * 1.2;
        }
    }

    const bmr = calculateBMR(weight, height, age, gender);
    var calories;
    if (bmr !== null) {
        console.log(`User's BMR: ${bmr}`);

        calories = calculateCalories(bmr, activity_level);
        if (calories !== null) {
            console.log(`User's daily calorie requirement: ${calories}`);
            // console.log(`User's total daily energy expenditure: ${totalCalories}`)
        } else {
            console.log('Invalid activity level');
        }
    } else {
        console.log('Invalid gender');
    }
    console.log('diseases of user->')
    console.log(userDetails.diseases)
    console.log('type data')
    console.log(typeof userDetails.diseases)   


    return (
        <div>
            <DailyDietLandingPage />
            <DailyDietRender calories={calories} bmr={bmr} veg={userDetails.veg} userdisease={diseases}/> 
        </div>
    );
}

export default DailyDietComp