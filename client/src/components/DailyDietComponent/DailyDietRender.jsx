import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import foodItems from './food_data.json'
import diseaseList from './final_diseases.json'
import './DailyDiet.css'
import { Link } from 'react-router-dom';
import DietPlan from '../DietPlan/DietPlan'
import axios from 'axios';
const DailyDietRender = (props) => {
    console.log('hi this is the strating of the function')
    console.log('let\'s see if after chnaging the page the local storage consists of indexes i presssed earlier')
    //breakfast items
    const [clickedDivsBreakfast, setClickedDivsBreakfast] = useState([]);
    const [totalCaloriesBreakfast, setTotalCaloriesBreakfast] = useState(0);
    //lunch items
    const [clickedDivsLunch, setClickedDivsLunch] = useState([]);
    const [totalCaloriesLunch, setTotalCaloriesLunch] = useState(0);

    //snack items
    const [clickedDivsSnacks, setClickedDivsSnacks] = useState([]);
    const [totalCaloriesSnacks, setTotalCaloriesSnacks] = useState(0);
    //dinner items
    const [clickedDivsDinner, setClickedDivsDinner] = useState([]);
    const [totalCaloriesDinner, setTotalCaloriesDinner] = useState(0);
   
    //nutirents
    //SHREYA'S CHANGES
    const [totalNutrients, setTotalNutrients] = useState({
        Breakfast: {
            Calories: 0,
            Carbs: 0,
            Total_Fat: 0,
            Saturated_Fat: 0,
            Protein: 0,
            Fiber: 0,
            Cholesterol: 0,
            Sodium: 0,
            Sugar: 0,
            Potassium: 0,
            Magnesium: 0,
            Phosphorus: 0,
            Vitamin_C: 0,
            Vitamin_A: 0,
            Calcium: 0,
            Iron: 0,
            Zinc: 0,
            Vitamin_E: 0,
            Vitamin_K: 0
        },
        Lunch: {
            Calories: 0,
            Carbs: 0,
            Total_Fat: 0,
            Saturated_Fat: 0,
            Protein: 0,
            Fiber: 0,
            Cholesterol: 0,
            Sodium: 0,
            Sugar: 0,
            Potassium: 0,
            Magnesium: 0,
            Phosphorus: 0,
            Vitamin_C: 0,
            Vitamin_A: 0,
            Calcium: 0,
            Iron: 0,
            Zinc: 0,
            Vitamin_E: 0,
            Vitamin_K: 0
        },
        Snacks: {
            Calories: 0,
            Carbs: 0,
            Total_Fat: 0,
            Saturated_Fat: 0,
            Protein: 0,
            Fiber: 0,
            Cholesterol: 0,
            Sodium: 0,
            Sugar: 0,
            Potassium: 0,
            Magnesium: 0,
            Phosphorus: 0,
            Vitamin_C: 0,
            Vitamin_A: 0,
            Calcium: 0,
            Iron: 0,
            Zinc: 0,
            Vitamin_E: 0,
            Vitamin_K: 0
        },
        Dinner: {
            Calories: 0,
            Carbs: 0,
            Total_Fat: 0,
            Saturated_Fat: 0,
            Protein: 0,
            Fiber: 0,
            Cholesterol: 0,
            Sodium: 0,
            Sugar: 0,
            Potassium: 0,
            Magnesium: 0,
            Phosphorus: 0,
            Vitamin_C: 0,
            Vitamin_A: 0,
            Calcium: 0,
            Iron: 0,
            Zinc: 0,
            Vitamin_E: 0,
            Vitamin_K: 0
        }
    });
    const [diseases, setDiseases] = useState([]);
    //loading from local storage
    useEffect(() => {
        //disease logic
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const jwtToken = localStorage.getItem('jwtToken');
                const url = `/api/healthtracker/user/${userId}`;
                const config = {
                    headers: {
                        Authorization: jwtToken
                    }
                };
                const response = await axios.get(url, config);
                const user = response.data;
                setDiseases(user.diseases);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
        console.log('disease data',diseases)
        
        //breakfast logic

        //loading all selected breakfast
        const storedClickedDivsBreakfastString = localStorage.getItem('clickedDivsBreakfast');
        let storedClickedDivsBreakfast = [];
        if (storedClickedDivsBreakfastString) {
            try {
                //divs converted from string to array
                storedClickedDivsBreakfast = JSON.parse(storedClickedDivsBreakfastString);
                // Check if parsed data is an array
                if (!Array.isArray(storedClickedDivsBreakfast)) {
                    throw new Error('Data retrieved from localStorage is not an array.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        // Convert the array of indexes into an array of integers
        const clickedIndexesBreakfast = storedClickedDivsBreakfast.map(index => parseInt(index));
        setClickedDivsBreakfast(clickedIndexesBreakfast);

        //lunch logic
        const storedClickedDivsLunchString = localStorage.getItem('clickedDivsLunch');
        let storedClickedDivsLunch = [];
        if (storedClickedDivsLunchString) {
            try {
                storedClickedDivsLunch = JSON.parse(storedClickedDivsLunchString);
                // Check if parsed data is an array
                if (!Array.isArray(storedClickedDivsLunch)) {
                    throw new Error('Data retrieved from localStorage is not an array.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        // Convert the array of indexes into an array of integers
        const clickedIndexesLunch = storedClickedDivsLunch.map(index => parseInt(index));
        setClickedDivsLunch(clickedIndexesLunch);

        //snacks logic
        const storedClickedDivsSnacksString = localStorage.getItem('clickedDivsSnacks');
        let storedClickedDivsSnacks = [];
        if (storedClickedDivsSnacksString) {
            try {
                storedClickedDivsSnacks = JSON.parse(storedClickedDivsSnacksString);
                // Check if parsed data is an array
                if (!Array.isArray(storedClickedDivsSnacks)) {
                    throw new Error('Data retrieved from localStorage is not an array.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        // Convert the array of indexes into an array of integers
        const clickedIndexesSnacks = storedClickedDivsSnacks.map(index => parseInt(index));
        setClickedDivsSnacks(clickedIndexesSnacks);

        //dinner logic
        const storedClickedDivsDinnerString = localStorage.getItem('clickedDivsDinner');
        let storedClickedDivsDinner = [];
        if (storedClickedDivsDinnerString) {
            try {
                storedClickedDivsDinner = JSON.parse(storedClickedDivsDinnerString);
                // Check if parsed data is an array
                if (!Array.isArray(storedClickedDivsDinner)) {
                    throw new Error('Data retrieved from localStorage is not an array.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        // Convert the array of indexes into an array of integers
        const clickedIndexesDinner = storedClickedDivsDinner.map(index => parseInt(index));
        setClickedDivsDinner(clickedIndexesDinner);

        //nutrients logic

        const storedTotalNutrientsString = localStorage.getItem('totalNutrients');

        if (storedTotalNutrientsString) {
            try {
                const storedTotalNutrients = JSON.parse(storedTotalNutrientsString);
                setTotalNutrients(storedTotalNutrients);

                // Extract breakfast calories
                const breakfastCalories = storedTotalNutrients.Breakfast.Calories || 0;
                const lunchCalories = storedTotalNutrients.Lunch.Calories || 0;
                const dinnerCalories = storedTotalNutrients.Dinner.Calories || 0;
                const snacksCalories = storedTotalNutrients.Snacks.Calories || 0;

                setTotalCaloriesBreakfast(breakfastCalories);
                setTotalCaloriesLunch(lunchCalories);
                setTotalCaloriesSnacks(snacksCalories);
                setTotalCaloriesDinner(dinnerCalories);

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }

        // localStorage.setItem('clickedDivsBreakfast', JSON.stringify(clickedDivsBreakfast));
    }, []);
    // console.log('stored nutrients initally')
    // console.log(localStorage.getItem('totalNutrients'))
    // console.log('in the use state')
    // console.log(filteredFood2)
    const [activeButton, setActiveButton] = useState('button1');
    function filterFoodItemsByDiseases(userDiseases, foodItems) {
        let ans = new Set();
        userDiseases.forEach((diseaseName) => {
            // console.log(diseaseName);

            const disease = findObjectByDiseaseName(diseaseName, diseaseList);
            // console.log(disease);

            const filteredFoodItems = foodItems.filter((foodItem) => {

                if (
                    foodItem.Carbs * 0.9 > disease.Carbs ||
                    foodItem.Total_Fat * 0.9 > disease.Total_Fat ||
                    foodItem.Saturated_Fat * 0.9 > disease.Saturated_Fat ||
                    foodItem.Protein * 0.9 > disease.Protein ||
                    foodItem.Fiber * 0.9 > disease.Fiber ||
                    foodItem.Cholesterol * 0.9 > disease.Cholesterol ||
                    foodItem.Sodium * 0.9 > disease.Sodium ||
                    foodItem.Sugar * 0.9 > disease.Sugar ||
                    foodItem.Potassium * 0.9 > disease.Potassium ||
                    foodItem.Magnesium * 0.9 > disease.Magnesium ||
                    foodItem.Phosphorus * 0.9 > disease.Phosphorus ||
                    foodItem.Vitamin_C * 0.9 > disease.Vitamin_C ||
                    foodItem.Vitamin_A * 0.9 > disease.Vitamin_A ||
                    foodItem.Calcium * 0.9 > disease.Calcium ||
                    foodItem.Iron * 0.9 > disease.Iron ||
                    foodItem.Zinc * 0.9 > disease.Zinc ||
                    foodItem.Vitamin_E * 0.9 > disease.Vitamin_E ||
                    foodItem.Vitamin_K * 0.9 > disease.Vitamin_K
                ) {
                    return false;
                }
                return true;
            });
            filteredFoodItems.forEach((item) => ans.add(item));
        });
        return Array.from(ans);
    }
    const mealTime = ["Breakfast", "Lunch", "Snacks", "Dinner"];

    function findValidCategories() {
        const categoriesVeg = {
            Breakfast: [
                "Breakfast grains",
                "Fruits",
                "Vegetables",
                "Protien",
                "Healthy Fats",
                "Breads",
                "Juice",
                "Indian bread",
                "Tea & Coffee",
            ],
            Lunch: [
                "Grains",
                "Indian bread",
                "Vegetables",
                "Salads",
                "Healthy Fats",
                "Soup",
                "Dairy",
            ],
            Snacks: [
                "Tea & Coffee",
                "Sandwich",
                "Nuts & Seeds",
                "Fruits",
                "Beverages",
                "Juice",
            ],
            Dinner: [
                "Grains",
                "Indian bread",
                "Vegetables",
                "Salads",
                "Healthy Fats",
                "Soup",
                "Dairy",
            ],
        };
        const categoriesNonVeg = {
            Breakfast: [
                "Breakfast grains",
                "Fruits",
                "Vegetables",
                "Non-veg Protien",
                "Protien",
                "Healthy Fats",
                "Breads",
                "Juice",
                "Indian bread",
                "Tea & Coffee",
            ],
            Lunch: [
                "Grains",
                "Indian bread",
                "Vegetables",
                "Salads",
                "Healthy Fats",
                "Soup",
                "Dairy",
                "Meat",
                "Non-veg Salads",
                "Non-veg Soup",
            ],
            Snacks: [
                "Tea & Coffee",
                "Sandwich",
                "Nuts & Seeds",
                "Fruits",
                "Beverages",
                "Juice",
                "Non-veg Sandwich",
            ],
            Dinner: [
                "Grains",
                "Indian bread",
                "Vegetables",
                "Salads",
                "Healthy Fats",
                "Soup",
                "Dairy",
                "Meat",
                "Non-veg Salads",
                "Non-veg Soup",
            ],
        };
        return (props.veg == 'false') ? categoriesNonVeg : categoriesVeg;
    }

    function findObjectByDiseaseName(diseaseName, jsonData) {
        return jsonData.find(obj => obj.Disease === diseaseName);
    }

    const validCategories = findValidCategories();
        // console.log('hardcoded user diseases->',['Acute Pancreatitis', 'Diabetes', 'Conjunctivitis'])
    // console.log(typeof ['Acute Pancreatitis', 'Diabetes', 'Conjunctivitis'])
    console.log('disease data',diseases)
    // console.log('disease from user->',props.userdisease)
    // console.log(typeof props.userdisease)
    let filteredFood = filterFoodItemsByDiseases(['Acute Pancreatitis', 'Diabetes', 'Conjunctivitis'], foodItems);
      // localStorage.setItem('')
    // const breakfastObjects = filteredFood.filter((obj) =>
    //     (validCategories.Breakfast.includes(obj.Category))
    // );

    //logic to make diet plan, filter out food
    let filteredFood2 = filterFoodItemsByDiseases(diseases, foodItems);
    console.log('filteredfood on the basis of disease->')
    console.log(filteredFood2)
  
    const breakfastObjects2 = filteredFood2.filter((obj) =>
        (validCategories.Breakfast.includes(obj.Category))
    );
    console.log('filteredfood breakfast on the basis of disease->')
    console.log(breakfastObjects2)
    const existingBreakfastFiltered = localStorage.getItem('breakfastFiltered');

    // Check if the existing value is not null and breakfastObjects2 is not empty
    if (existingBreakfastFiltered && breakfastObjects2.length > 0) {
        // Update localStorage with the new value
        localStorage.setItem('breakfastFiltered', JSON.stringify(breakfastObjects2));
    } else if (!existingBreakfastFiltered && breakfastObjects2.length > 0) {
        // If the existing value is null and breakfastObjects2 is not empty, set localStorage to new value
        localStorage.setItem('breakfastFiltered', JSON.stringify(breakfastObjects2));
    }
    const breakfastFilteredString = localStorage.getItem('breakfastFiltered');
    let breakfastObjects22 = [];
    // Check if breakfastFilteredString is not null or undefined
    if (breakfastFilteredString) {
        // Parse the JSON string to convert it back to an array
        breakfastObjects22 = JSON.parse(breakfastFilteredString);
    } else {
        // If breakfastFilteredString is null or undefined, initialize breakfastObjects2 as an empty array
        breakfastObjects22 = [];
    }
    breakfastObjects22.sort((a, b) => {
        if (a.Category < b.Category) {
            return -1;
        }
        if (a.Category > b.Category) {
            return 1;
        }
        return 0;
    });


    // breakfastObjects.sort((a, b) => {
    //     if (a.Category < b.Category) {
    //         return -1;
    //     }
    //     if (a.Category > b.Category) {
    //         return 1;
    //     }
    //     return 0;
    // });
    
    console.log('breakfast objects->');
    console.log(breakfastObjects22);
    const lunchObjects = filteredFood2.filter((obj) =>
        validCategories.Lunch.includes(obj.Category)
    );
    console.log('filteredfood lunch on the basis of disease->')
    console.log(lunchObjects)
    const existingLunchFiltered = localStorage.getItem('lunchFiltered');

    // Check if the existing value is not null and breakfastObjects2 is not empty
    if (existingLunchFiltered && lunchObjects.length > 0) {
        // Update localStorage with the new value
        localStorage.setItem('lunchFiltered', JSON.stringify(lunchObjects));
    } else if (!existingLunchFiltered && lunchObjects.length > 0) {
        // If the existing value is null and breakfastObjects2 is not empty, set localStorage to new value
        localStorage.setItem('lunchFiltered', JSON.stringify(lunchObjects));
    }
    const lunchFilteredString = localStorage.getItem('lunchFiltered');
    let lunchObjects2 = [];
    // Check if breakfastFilteredString is not null or undefined
    if (lunchFilteredString) {
        // Parse the JSON string to convert it back to an array
        lunchObjects2 = JSON.parse(lunchFilteredString);
    } else {
        // If breakfastFilteredString is null or undefined, initialize breakfastObjects2 as an empty array
        lunchObjects2 = [];
    }
    
    lunchObjects2.sort((a, b) => {
        if (a.Category < b.Category) {
            return -1;
        }
        if (a.Category > b.Category) {
            return 1;
        }
        return 0;
    });

    const snacksObjects = filteredFood2.filter((obj) =>
        validCategories.Snacks.includes(obj.Category)
    );
    console.log('filteredfood snacks on the basis of disease->')
    console.log(snacksObjects)
    const existingSnacksFiltered = localStorage.getItem('snacksFiltered');
    // Check if the existing value is not null and breakfastObjects2 is not empty
    if (existingSnacksFiltered && snacksObjects.length > 0) {
        // Update localStorage with the new value
        localStorage.setItem('snacksFiltered', JSON.stringify(snacksObjects));
    } else if (!existingSnacksFiltered  && snacksObjects.length > 0) {
        // If the existing value is null and breakfastObjects2 is not empty, set localStorage to new value
        localStorage.setItem('snacksFiltered', JSON.stringify(snacksObjects));
    }
    const snacksFilteredString = localStorage.getItem('snacksFiltered');
    let snacksObjects2 = [];
    // Check if breakfastFilteredString is not null or undefined
    if (snacksFilteredString) {
        // Parse the JSON string to convert it back to an array
        snacksObjects2 = JSON.parse(snacksFilteredString);
    } else {
        // If breakfastFilteredString is null or undefined, initialize breakfastObjects2 as an empty array
        snacksObjects2 = [];
    }
    snacksObjects2.sort((a, b) => {
        if (a.Category < b.Category) {
            return -1;
        }
        if (a.Category > b.Category) {
            return 1;
        }
        return 0;
    });

    const dinnerObjects = filteredFood2.filter((obj) =>
        validCategories.Dinner.includes(obj.Category)
    );
    console.log('filteredfood dinner on the basis of disease->')
    console.log(dinnerObjects)
    const existingDinnerFiltered = localStorage.getItem('dinnerFiltered');

    // Check if the existing value is not null and breakfastObjects2 is not empty
    if (existingDinnerFiltered && dinnerObjects.length > 0) {
        // Update localStorage with the new value
        localStorage.setItem('dinnerFiltered', JSON.stringify(dinnerObjects));
    } else if (!existingDinnerFiltered && lunchObjects.length > 0) {
        // If the existing value is null and breakfastObjects2 is not empty, set localStorage to new value
        localStorage.setItem('dinnerFiltered', JSON.stringify(dinnerObjects));
    }
    const dinnerFilteredString = localStorage.getItem('dinnerFiltered');
    let dinnerObjects2 = [];
    // Check if breakfastFilteredString is not null or undefined
    if (dinnerFilteredString) {
        // Parse the JSON string to convert it back to an array
        dinnerObjects2 = JSON.parse(dinnerFilteredString);
    } else {
        // If breakfastFilteredString is null or undefined, initialize breakfastObjects2 as an empty array
        dinnerObjects2 = [];
    }
    
   
    dinnerObjects2.sort((a, b) => {
        if (a.Category < b.Category) {
            return -1;
        }
        if (a.Category > b.Category) {
            return 1;
        }
        return 0;
    });


    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleButtonClick2 = () => {
        // Here you can store the selected nutrient values in the local storage
        console.log('breakfast')
        console.log('clicked divs on usesate are->')
        console.log(clickedDivsBreakfast)
        localStorage.setItem('clickedDivsBreakfast', JSON.stringify(clickedDivsBreakfast))
        console.log('stored clicked divs are->')
        console.log(localStorage.getItem('clickedDivsBreakfast'))

        console.log('lunch')
        console.log('clicked divs on usesate are lunch->')
        console.log(clickedDivsLunch)
        localStorage.setItem('clickedDivsLunch', JSON.stringify(clickedDivsLunch))
        console.log('stored clicked divs are->')
        console.log(localStorage.getItem('clickedDivsLunch'))

        console.log('snacks')
        console.log('clicked divs on usesate are->')
        console.log(clickedDivsSnacks)
        localStorage.setItem('clickedDivsSnacks', JSON.stringify(clickedDivsSnacks))
        console.log('stored clicked divs are->')
        console.log(localStorage.getItem('clickedDivsSnacks'))

        console.log('dinner')
        console.log('clicked divs on usesate are->')
        console.log(clickedDivsDinner)
        localStorage.setItem('clickedDivsDinner', JSON.stringify(clickedDivsDinner))
        console.log('stored clicked divs are->')
        console.log(localStorage.getItem('clickedDivsDinner'))

        console.log('setting nutrients')
        console.log('nutrients on usesate are->')
        console.log(totalNutrients)
        localStorage.setItem('totalNutrients', JSON.stringify(totalNutrients));
        console.log('stored totalNutrients are->')
        console.log(localStorage.getItem('totalNutrients'))
        // console.log(localStorage.getItem('clickedDivsBreakfast'))
    };
    // Function to handle click on a div
    //shreya's logic
    //logic to  load clicked divs from localstorage
    const handleDivClickBreakfast = (index, item) => {
        const isClicked = clickedDivsBreakfast.includes(index);

        const updatedClickedDivsBreakfast = isClicked
            ? clickedDivsBreakfast.filter((item) => item !== index)
            : [...clickedDivsBreakfast, index];

        const updatedTotalCaloriesBreakfast = isClicked
            ? totalCaloriesBreakfast - item.Calories
            : totalCaloriesBreakfast + item.Calories;

        const updatedTotalNutrients = {
            ...totalNutrients,
            Breakfast: {
                ...totalNutrients.Breakfast,
                Calories: updatedTotalCaloriesBreakfast,
                Carbs: isClicked ? totalNutrients.Breakfast.Carbs - item.Carbs : totalNutrients.Breakfast.Carbs + item.Carbs,
                Total_Fat: isClicked ? totalNutrients.Breakfast.Total_Fat - item.Total_Fat : totalNutrients.Breakfast.Total_Fat + item.Total_Fat,
                Saturated_Fat: isClicked ? totalNutrients.Breakfast.Saturated_Fat - item.Saturated_Fat : totalNutrients.Breakfast.Saturated_Fat + item.Saturated_Fat,
                Protein: isClicked ? totalNutrients.Breakfast.Protein - item.Protein : totalNutrients.Breakfast.Protein + item.Protein,
                Fiber: isClicked ? totalNutrients.Breakfast.Fiber - item.Fiber : totalNutrients.Breakfast.Fiber + item.Fiber,
                Cholesterol: isClicked ? totalNutrients.Breakfast.Cholesterol - item.Cholesterol : totalNutrients.Breakfast.Cholesterol + item.Cholesterol,
                Sodium: isClicked ? totalNutrients.Breakfast.Sodium - item.Sodium : totalNutrients.Breakfast.Sodium + item.Sodium,
                Sugar: isClicked ? totalNutrients.Breakfast.Sugar - item.Sugar : totalNutrients.Breakfast.Sugar + item.Sugar,
                Potassium: isClicked ? totalNutrients.Breakfast.Potassium - item.Potassium : totalNutrients.Breakfast.Potassium + item.Potassium,
                Magnesium: isClicked ? totalNutrients.Breakfast.Magnesium - item.Magnesium : totalNutrients.Breakfast.Magnesium + item.Magnesium,
                Phosphorus: isClicked ? totalNutrients.Breakfast.Phosphorus - item.Phosphorus : totalNutrients.Breakfast.Phosphorus + item.Phosphorus,
                Vitamin_C: isClicked ? totalNutrients.Breakfast.Vitamin_C - item.Vitamin_C : totalNutrients.Breakfast.Vitamin_C + item.Vitamin_C,
                Vitamin_A: isClicked ? totalNutrients.Breakfast.Vitamin_A - item.Vitamin_A : totalNutrients.Breakfast.Vitamin_A + item.Vitamin_A,
                Calcium: isClicked ? totalNutrients.Breakfast.Calcium - item.Calcium : totalNutrients.Breakfast.Calcium + item.Calcium,
                Iron: isClicked ? totalNutrients.Breakfast.Iron - item.Iron : totalNutrients.Breakfast.Iron + item.Iron,
                Zinc: isClicked ? totalNutrients.Breakfast.Zinc - item.Zinc : totalNutrients.Breakfast.Zinc + item.Zinc,
                Vitamin_E: isClicked ? totalNutrients.Breakfast.Vitamin_E - item.Vitamin_E : totalNutrients.Breakfast.Vitamin_E + item.Vitamin_E,
                Vitamin_K: isClicked ? totalNutrients.Breakfast.Vitamin_K - item.Vitamin_K : totalNutrients.Breakfast.Vitamin_K + item.Vitamin_K
            }
        };



        setClickedDivsBreakfast(updatedClickedDivsBreakfast);
        setTotalCaloriesBreakfast(updatedTotalCaloriesBreakfast);
        setTotalNutrients(updatedTotalNutrients);


        // console.log('clicked divs on usesate are->')
        // console.log(clickedDivsBreakfast)
        // localStorage.setItem('clickedDivsBreakfast',JSON.stringify(clickedDivsBreakfast))
        // console.log('stored clicked divs are->')
        // console.log( localStorage.getItem('clickedDivsBreakfast'))
        // console.log('nutients on usesate are->')
        // console.log(totalNutrients)
        // localStorage.setItem('totalNutrients', JSON.stringify(totalNutrients));
        // console.log('stored totalNutrients are->')
        // console.log(localStorage.getItem('totalNutrients'))
    };


    const renderBreakfastObjects = () => {
        let currentCat = '';
        return breakfastObjects22.map((item, index) => {
            if (item.Category !== currentCat) {
                currentCat = item.Category;

                const isClicked = clickedDivsBreakfast.includes(index);
                return (
                    <div>
                        <div className="category-name alert alert-primary">{item.Category}</div>
                        <div className="d-flex justify-content-center">
                            <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                                key={index}
                                onClick={() => handleDivClickBreakfast(index, item)}
                            >
                                <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                                <span class="ml-2"> {item.food_items}</span>
                                <span className="ml-2">{item.Calories} Kcal</span>
                                {/* <span className="ml-2">{item.Category} </span> */}

                            </button>
                        </div>
                    </div>
                );
            }
            else {
                const isClicked = clickedDivsBreakfast.includes(index);
                return (
                    <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                        key={index}
                        onClick={() => handleDivClickBreakfast(index, item)}
                    >
                        <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                        <span class="ml-2"> {item.food_items}</span>
                        <span className="ml-2">{item.Calories} calories</span>
                        {/* <span className="ml-2">{item.Category} </span> */}

                    </button>
                );
            }
        });
    };

    // Render pink divs separately at the bottom
    const renderPinkDivsBreakfast = () => {
        // console.log('you \' ve reached renderPinkDivsBreakfast')
        // console.log('clicked divs are->')
        // console.log(clickedDivsBreakfast)
        return clickedDivsBreakfast.map((index) => (
            <button key={index} className="btn btn-lg rounded-pill m-1 custom-selected-food-btn">
                <span className="ml-2">{breakfastObjects22[index].food_items}</span>
            </button>
        ));
    };
    //shreya's logic
    const printNutritionalInfoBreakfast = () => {
        const { Calories, Carbs, Total_Fat, Saturated_Fat, Protein, Fiber, Cholesterol, Sodium, Sugar, Potassium, Magnesium, Phosphorus, Vitamin_C, Vitamin_A, Calcium, Iron, Zinc, Vitamin_E, Vitamin_K } = totalNutrients.Breakfast;

        return (
            <div className="">
                <p className="text-2xl text-bold">Breakfast Calories: {Calories.toFixed(2)}</p>

            </div>
        );
    };

    const handleDivClickLunch = (index, item) => {
        const isClicked = clickedDivsLunch.includes(index);

        const updatedClickedDivsLunch = isClicked
            ? clickedDivsLunch.filter((item) => item !== index)
            : [...clickedDivsLunch, index];

        const updatedTotalCaloriesLunch = isClicked
            ? totalCaloriesLunch - item.Calories
            : totalCaloriesLunch + item.Calories;
        console.log('item in lunch has been clicked')
        console.log(item)
        console.log(updatedClickedDivsLunch)

        const updatedTotalNutrients = {
            ...totalNutrients,
            Lunch: {
                ...totalNutrients.Lunch,
                Calories: updatedTotalCaloriesLunch,
                Carbs: isClicked ? totalNutrients.Lunch.Carbs - item.Carbs : totalNutrients.Lunch.Carbs + item.Carbs,
                Total_Fat: isClicked ? totalNutrients.Lunch.Total_Fat - item.Total_Fat : totalNutrients.Lunch.Total_Fat + item.Total_Fat,
                Saturated_Fat: isClicked ? totalNutrients.Lunch.Saturated_Fat - item.Saturated_Fat : totalNutrients.Lunch.Saturated_Fat + item.Saturated_Fat,
                Protein: isClicked ? totalNutrients.Lunch.Protein - item.Protein : totalNutrients.Lunch.Protein + item.Protein,
                Fiber: isClicked ? totalNutrients.Lunch.Fiber - item.Fiber : totalNutrients.Lunch.Fiber + item.Fiber,
                Cholesterol: isClicked ? totalNutrients.Lunch.Cholesterol - item.Cholesterol : totalNutrients.Lunch.Cholesterol + item.Cholesterol,
                Sodium: isClicked ? totalNutrients.Lunch.Sodium - item.Sodium : totalNutrients.Lunch.Sodium + item.Sodium,
                Sugar: isClicked ? totalNutrients.Lunch.Sugar - item.Sugar : totalNutrients.Lunch.Sugar + item.Sugar,
                Potassium: isClicked ? totalNutrients.Lunch.Potassium - item.Potassium : totalNutrients.Lunch.Potassium + item.Potassium,
                Magnesium: isClicked ? totalNutrients.Lunch.Magnesium - item.Magnesium : totalNutrients.Lunch.Magnesium + item.Magnesium,
                Phosphorus: isClicked ? totalNutrients.Lunch.Phosphorus - item.Phosphorus : totalNutrients.Lunch.Phosphorus + item.Phosphorus,
                Vitamin_C: isClicked ? totalNutrients.Lunch.Vitamin_C - item.Vitamin_C : totalNutrients.Lunch.Vitamin_C + item.Vitamin_C,
                Vitamin_A: isClicked ? totalNutrients.Lunch.Vitamin_A - item.Vitamin_A : totalNutrients.Lunch.Vitamin_A + item.Vitamin_A,
                Calcium: isClicked ? totalNutrients.Lunch.Calcium - item.Calcium : totalNutrients.Lunch.Calcium + item.Calcium,
                Iron: isClicked ? totalNutrients.Lunch.Iron - item.Iron : totalNutrients.Lunch.Iron + item.Iron,
                Zinc: isClicked ? totalNutrients.Lunch.Zinc - item.Zinc : totalNutrients.Lunch.Zinc + item.Zinc,
                Vitamin_E: isClicked ? totalNutrients.Lunch.Vitamin_E - item.Vitamin_E : totalNutrients.Lunch.Vitamin_E + item.Vitamin_E,
                Vitamin_K: isClicked ? totalNutrients.Lunch.Vitamin_K - item.Vitamin_K : totalNutrients.Lunch.Vitamin_K + item.Vitamin_K
            }
        };
        console.log(updatedTotalNutrients)
        console.log('enddd')
        setClickedDivsLunch(updatedClickedDivsLunch);
        setTotalCaloriesLunch(updatedTotalCaloriesLunch);
        setTotalNutrients(updatedTotalNutrients);
        console.log('clicked divs on usesate lunch are->')
        console.log(clickedDivsLunch)

        console.log('nutients on usesate are->')
        console.log(totalNutrients)
    };


    const renderLunchObjects = () => {

        let currentCat_L = '';
        return lunchObjects2.map((item, index) => {
            if (item.Category !== currentCat_L) {
                currentCat_L = item.Category;
                const isClicked = clickedDivsLunch.includes(index);
                return (
                    <div>
                        <div className="category-name alert alert-primary">{item.Category}</div>
                        <div className="d-flex justify-content-center">
                            <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                                key={index}
                                onClick={() => handleDivClickLunch(index, item)}
                            >
                                <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                                <span class="ml-2"> {item.food_items}</span>
                                <span className="ml-2">{item.Calories} Kcal</span>
                                {/* <span className="ml-2">{item.Category} </span> */}

                            </button>
                        </div>
                    </div >
                );
            }
            else {
                const isClicked = clickedDivsLunch.includes(index);
                return (
                    <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                        key={index}
                        onClick={() => handleDivClickLunch(index, item)}
                    >
                        <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                        <span class="ml-2"> {item.food_items}</span>
                        <span className="ml-2">{item.Calories} calories</span>
                        {/* <span className="ml-2">{item.Category} </span> */}

                    </button>
                );
            }
        });
    };

    const renderPinkDivsLunch = () => {
        return clickedDivsLunch.map((index) => (
            <button key={index} className="btn btn-lg rounded-pill m-1 custom-selected-food-btn">
                <span className="ml-2">{lunchObjects2[index].food_items}</span>
            </button>
        ));
    };

    const printNutritionalInfoLunch = () => {

        const { Calories, Carbs, Total_Fat, Saturated_Fat, Protein, Fiber, Cholesterol, Sodium, Sugar, Potassium, Magnesium, Phosphorus, Vitamin_C, Vitamin_A, Calcium, Iron, Zinc, Vitamin_E, Vitamin_K } = totalNutrients.Lunch;

        return (<div className="">
            <p className="text-2xl text-bold">Lunch Calories: {totalCaloriesLunch.toFixed(2)}</p>
        </div>)
    }

    // Function to handle click on a div for snacks
    const handleDivClickSnacks = (index, item) => {
        const isClicked = clickedDivsSnacks.includes(index);

        const updatedClickedDivsSnacks = isClicked
            ? clickedDivsSnacks.filter((item) => item !== index)
            : [...clickedDivsSnacks, index];

        const updatedTotalCaloriesSnacks = isClicked
            ? totalCaloriesSnacks - item.Calories
            : totalCaloriesSnacks + item.Calories;

        const updatedTotalNutrients = {
            ...totalNutrients,
            Snacks: {
                ...totalNutrients.Snacks,
                Calories: updatedTotalCaloriesSnacks,
                Carbs: isClicked ? totalNutrients.Snacks.Carbs - item.Carbs : totalNutrients.Snacks.Carbs + item.Carbs,
                Total_Fat: isClicked ? totalNutrients.Snacks.Total_Fat - item.Total_Fat : totalNutrients.Snacks.Total_Fat + item.Total_Fat,
                Saturated_Fat: isClicked ? totalNutrients.Snacks.Saturated_Fat - item.Saturated_Fat : totalNutrients.Snacks.Saturated_Fat + item.Saturated_Fat,
                Protein: isClicked ? totalNutrients.Snacks.Protein - item.Protein : totalNutrients.Snacks.Protein + item.Protein,
                Fiber: isClicked ? totalNutrients.Snacks.Fiber - item.Fiber : totalNutrients.Snacks.Fiber + item.Fiber,
                Cholesterol: isClicked ? totalNutrients.Snacks.Cholesterol - item.Cholesterol : totalNutrients.Snacks.Cholesterol + item.Cholesterol,
                Sodium: isClicked ? totalNutrients.Snacks.Sodium - item.Sodium : totalNutrients.Snacks.Sodium + item.Sodium,
                Sugar: isClicked ? totalNutrients.Snacks.Sugar - item.Sugar : totalNutrients.Snacks.Sugar + item.Sugar,
                Potassium: isClicked ? totalNutrients.Snacks.Potassium - item.Potassium : totalNutrients.Snacks.Potassium + item.Potassium,
                Magnesium: isClicked ? totalNutrients.Snacks.Magnesium - item.Magnesium : totalNutrients.Snacks.Magnesium + item.Magnesium,
                Phosphorus: isClicked ? totalNutrients.Snacks.Phosphorus - item.Phosphorus : totalNutrients.Snacks.Phosphorus + item.Phosphorus,
                Vitamin_C: isClicked ? totalNutrients.Snacks.Vitamin_C - item.Vitamin_C : totalNutrients.Snacks.Vitamin_C + item.Vitamin_C,
                Vitamin_A: isClicked ? totalNutrients.Snacks.Vitamin_A - item.Vitamin_A : totalNutrients.Snacks.Vitamin_A + item.Vitamin_A,
                Calcium: isClicked ? totalNutrients.Snacks.Calcium - item.Calcium : totalNutrients.Snacks.Calcium + item.Calcium,
                Iron: isClicked ? totalNutrients.Snacks.Iron - item.Iron : totalNutrients.Snacks.Iron + item.Iron,
                Zinc: isClicked ? totalNutrients.Snacks.Zinc - item.Zinc : totalNutrients.Snacks.Zinc + item.Zinc,
                Vitamin_E: isClicked ? totalNutrients.Snacks.Vitamin_E - item.Vitamin_E : totalNutrients.Snacks.Vitamin_E + item.Vitamin_E,
                Vitamin_K: isClicked ? totalNutrients.Snacks.Vitamin_K - item.Vitamin_K : totalNutrients.Snacks.Vitamin_K + item.Vitamin_K
            }
        };

        setClickedDivsSnacks(updatedClickedDivsSnacks);
        setTotalCaloriesSnacks(updatedTotalCaloriesSnacks);
        setTotalNutrients(updatedTotalNutrients);
    };


    const renderSnacksObjects = () => {

        let currentCat_S = '';
        return snacksObjects2.map((item, index) => {
            if (item.Category !== currentCat_S) {
                currentCat_S = item.Category;
                const isClicked = clickedDivsSnacks.includes(index);
                return (
                    <div>
                        <div className="category-name alert alert-primary">{item.Category}</div>
                        <div className="d-flex justify-content-center">
                            <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                                key={index}
                                onClick={() => handleDivClickSnacks(index, item)}
                            >
                                <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                                <span class="ml-2"> {item.food_items}</span>
                                <span className="ml-2">{item.Calories} Kcal</span>
                                {/* <span className="ml-2">{item.Category} </span> */}

                            </button>
                        </div>
                    </div>
                );
            }
            else {
                const isClicked = clickedDivsSnacks.includes(index);
                return (
                    <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                        key={index}
                        onClick={() => handleDivClickSnacks(index, item)}
                    >
                        <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                        <span class="ml-2"> {item.food_items}</span>
                        <span className="ml-2">{item.Calories} calories</span>
                        {/* <span className="ml-2">{item.Category} </span> */}

                    </button>
                );
            }
        });
    };

    const renderPinkDivsSnacks = () => {
        return clickedDivsSnacks.map((index) => (
            <button key={index} className="btn btn-lg rounded-pill m-1 custom-selected-food-btn">
                <span className="ml-2">{snacksObjects2[index].food_items}</span>
            </button>
        ));
    };

    const printNutritionalInfoSnacks = () => {
        return (<div className="">
            <p className="text-2xl text-bold">Snack Calories: {totalCaloriesSnacks.toFixed(2)}</p>
        </div>)
    }
    // Function to handle click on a div for dinner
    const handleDivClickDinner = (index, item) => {
        const isClicked = clickedDivsDinner.includes(index);

        const updatedClickedDivsDinner = isClicked
            ? clickedDivsDinner.filter((item) => item !== index)
            : [...clickedDivsDinner, index];

        const updatedTotalCaloriesDinner = isClicked
            ? totalCaloriesDinner - item.Calories
            : totalCaloriesDinner + item.Calories;

        const updatedTotalNutrients = {
            ...totalNutrients,
            Dinner: {
                ...totalNutrients.Dinner,
                Calories: updatedTotalCaloriesDinner,
                Carbs: isClicked ? totalNutrients.Dinner.Carbs - item.Carbs : totalNutrients.Dinner.Carbs + item.Carbs,
                Total_Fat: isClicked ? totalNutrients.Dinner.Total_Fat - item.Total_Fat : totalNutrients.Dinner.Total_Fat + item.Total_Fat,
                Saturated_Fat: isClicked ? totalNutrients.Dinner.Saturated_Fat - item.Saturated_Fat : totalNutrients.Dinner.Saturated_Fat + item.Saturated_Fat,
                Protein: isClicked ? totalNutrients.Dinner.Protein - item.Protein : totalNutrients.Dinner.Protein + item.Protein,
                Fiber: isClicked ? totalNutrients.Dinner.Fiber - item.Fiber : totalNutrients.Dinner.Fiber + item.Fiber,
                Cholesterol: isClicked ? totalNutrients.Dinner.Cholesterol - item.Cholesterol : totalNutrients.Dinner.Cholesterol + item.Cholesterol,
                Sodium: isClicked ? totalNutrients.Dinner.Sodium - item.Sodium : totalNutrients.Dinner.Sodium + item.Sodium,
                Sugar: isClicked ? totalNutrients.Dinner.Sugar - item.Sugar : totalNutrients.Dinner.Sugar + item.Sugar,
                Potassium: isClicked ? totalNutrients.Dinner.Potassium - item.Potassium : totalNutrients.Dinner.Potassium + item.Potassium,
                Magnesium: isClicked ? totalNutrients.Dinner.Magnesium - item.Magnesium : totalNutrients.Dinner.Magnesium + item.Magnesium,
                Phosphorus: isClicked ? totalNutrients.Dinner.Phosphorus - item.Phosphorus : totalNutrients.Dinner.Phosphorus + item.Phosphorus,
                Vitamin_C: isClicked ? totalNutrients.Dinner.Vitamin_C - item.Vitamin_C : totalNutrients.Dinner.Vitamin_C + item.Vitamin_C,
                Vitamin_A: isClicked ? totalNutrients.Dinner.Vitamin_A - item.Vitamin_A : totalNutrients.Dinner.Vitamin_A + item.Vitamin_A,
                Calcium: isClicked ? totalNutrients.Dinner.Calcium - item.Calcium : totalNutrients.Dinner.Calcium + item.Calcium,
                Iron: isClicked ? totalNutrients.Dinner.Iron - item.Iron : totalNutrients.Dinner.Iron + item.Iron,
                Zinc: isClicked ? totalNutrients.Dinner.Zinc - item.Zinc : totalNutrients.Dinner.Zinc + item.Zinc,
                Vitamin_E: isClicked ? totalNutrients.Dinner.Vitamin_E - item.Vitamin_E : totalNutrients.Dinner.Vitamin_E + item.Vitamin_E,
                Vitamin_K: isClicked ? totalNutrients.Dinner.Vitamin_K - item.Vitamin_K : totalNutrients.Dinner.Vitamin_K + item.Vitamin_K
            }
        };

        setClickedDivsDinner(updatedClickedDivsDinner);
        setTotalCaloriesDinner(updatedTotalCaloriesDinner);
        setTotalNutrients(updatedTotalNutrients);
    };


    const renderDinnerObjects = () => {
        let currentCat_D = '';
        return dinnerObjects2.map((item, index) => {
            if (item.Category !== currentCat_D) {
                currentCat_D = item.Category;
                const isClicked = clickedDivsDinner.includes(index);
                return (
                    <div>
                        <div className="category-name alert alert-primary">{item.Category}</div>
                        <div className="d-flex justify-content-center">
                            <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                                key={index}
                                onClick={() => handleDivClickDinner(index, item)}
                            >
                                <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                                <span class="ml-2"> {item.food_items}</span>
                                <span className="ml-2">{item.Calories} Kcal</span>
                                {/* <span className="ml-2">{item.Category} </span> */}

                            </button>
                        </div>
                    </div>
                );
            }
            else {
                const isClicked = clickedDivsDinner.includes(index);
                return (
                    <button className={`btn btn-lg m-1 ${isClicked ? 'custom-food-btn' : 'btn-outline-primary '} rounded-pill`}
                        key={index}
                        onClick={() => handleDivClickDinner(index, item)}
                    >
                        <i className={isClicked ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} />
                        <span class="ml-2"> {item.food_items}</span>
                        <span className="ml-2">{item.Calories} calories</span>
                        {/* <span className="ml-2">{item.Category} </span> */}

                    </button>
                );
            }
        });
    };

    const renderPinkDivsDinner = () => {
        return clickedDivsDinner.map((index) => (
            <button key={index} className="btn btn-lg rounded-pill m-1 custom-selected-food-btn">
                <span className="ml-2">{dinnerObjects2[index].food_items}</span>
            </button>
        ));
    };

    const printNutritionalInfoDinner = () => {
        return (<div className="">
            <p className="text-2xl text-bold">Dinner Calories: {totalCaloriesDinner.toFixed(2)}</p>
        </div>)
    }

    

    

    return (
        <div className="container">
            <div className="alert alert-primary mt-3 mb-5" role="alert">
                <h4 className="alert-heading font-weight-bold text-2xl">On average, adults and children consume around 22% of their daily calories at breakfast, 31% at lunch, 35% at dinner, and the rest in snacks (18%)</h4>
            </div>

            <div className="container-fluid d-flex justify-content-between">
                <button class="btn btn-lg btn-primary custom-btn-style" onClick={() => handleButtonClick('button1')}>Breakfast</button>
                <button class="btn btn-lg btn-primary custom-btn-style" onClick={() => handleButtonClick('button2')}>Lunch</button>
                <button class="btn btn-lg btn-primary custom-btn-style" onClick={() => handleButtonClick('button3')}>Snacks</button>
                <button class="btn btn-lg btn-primary custom-btn-style" onClick={() => handleButtonClick('button4')}>Dinner</button>
            </div>

            {activeButton === 'button1' &&
                <div className="">
                    <h1 className='text-2xl text-bold m-4 text-center'>Your Daily Breakfast Calorie Requirement : {(props.calories * 0.22).toFixed(2)} </h1>
                    <div className="row food-container">
                        <div className="col-lg-7 food-container-items">{renderBreakfastObjects()}
                        </div>
                        <div className="col-lg-5 food-container-items-selected mt-3">
                            <div className="selected-box">{renderPinkDivsBreakfast()}</div>
                            {printNutritionalInfoBreakfast()}
                            <CircularProgressbar
                                value={totalCaloriesBreakfast}
                                maxValue={props.calories * 0.22}
                                text={totalCaloriesBreakfast > props.calories * 0.22 ? `${((totalCaloriesBreakfast / (props.calories * 0.22)) * 100).toFixed(1)}%` : `${((totalCaloriesBreakfast / (props.calories * 0.22)) * 100).toFixed(1)}%`}

                                className="custom-progress-bar"
                            />
                            <div><br /><Link to='/nutrition'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={handleButtonClick2}>Submit & View Report</button></Link></div>

                            <div >
                                <DietPlan calorieRequirement={props.calories * 0.22} breakfastObjects={breakfastObjects22} />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {activeButton === 'button2' &&
                <div className="">
                    <h1 className='text-2xl text-bold m-4 text-center'>Your Daily Lunch Calorie Requirement : {(props.calories * 0.31).toFixed(2)} </h1>
                    <div className="row food-container">
                        <div className="col-lg-7 food-container-items">{renderLunchObjects()}
                        </div>
                        <div className="col-lg-5 food-container-items-selected mt-3">
                            <div className="selected-box">{renderPinkDivsLunch()}</div>
                            {printNutritionalInfoLunch()}
                            <CircularProgressbar
                                value={totalCaloriesLunch}
                                maxValue={props.calories * 0.31}
                                text={totalCaloriesLunch > props.calories * 0.31 ? `${((totalCaloriesLunch / (props.calories * 0.31)) * 100).toFixed(1)}%` : `${((totalCaloriesLunch / (props.calories * 0.31)) * 100).toFixed(1)}%`}
                                className="custom-progress-bar"
                            />
                            <div><br /><Link to='/nutrition'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={handleButtonClick2}>Submit & View Report</button></Link></div>
                            <div >
                                <DietPlan calorieRequirement={props.calories * 0.31} breakfastObjects={lunchObjects2} />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {activeButton === 'button3' &&
                <div className="">
                    <h1 className='text-2xl text-bold m-4 text-center'>Your Daily Snacks Calorie Requirement : {(props.calories * 0.18).toFixed(2)} </h1>
                    <div className="row food-container">
                        <div className="col-lg-7 food-container-items">{renderSnacksObjects()}</div>
                        <div className="col-lg-5 food-container-items-selected mt-3">
                            <div className="selected-box">{renderPinkDivsSnacks()}</div>
                            {printNutritionalInfoSnacks()}
                            <CircularProgressbar
                                value={totalCaloriesSnacks}
                                maxValue={props.calories * 0.18}
                                text={totalCaloriesSnacks > props.calories * 0.18 ? `${((totalCaloriesSnacks / (props.calories * 0.18)) * 100).toFixed(1)}%` : `${((totalCaloriesSnacks / (props.calories * 0.18)) * 100).toFixed(1)}%`}
                                className="custom-progress-bar"
                            />
                            <div><br /><Link to='/nutrition'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={handleButtonClick2}>Submit & View Report</button></Link></div>
                            <div >
                                <DietPlan calorieRequirement={props.calories * 0.18} breakfastObjects={snacksObjects2} />
                            </div>

                        </div>
                    </div>
                </div>
            }
            {activeButton === 'button4' &&
                <div className="">
                    <h1 className='text-2xl text-bold m-4 text-center'>Your Daily Dinner Calorie Requirement : {(props.calories * 0.35).toFixed(2)} </h1>
                    <div className="row food-container">
                        <div className="col-lg-7 food-container-items">{renderDinnerObjects()}</div>
                        <div className="col-lg-5 food-container-items-selected mt-3">
                            <div className="selected-box">{renderPinkDivsDinner()}</div>
                            {printNutritionalInfoDinner()}
                            <CircularProgressbar
                                value={totalCaloriesDinner}
                                maxValue={props.calories * 0.35}
                                text={totalCaloriesDinner > props.calories * 0.35 ? `${((totalCaloriesDinner / (props.calories * 0.35)) * 100).toFixed(1)}%` : `${((totalCaloriesDinner / (props.calories * 0.35)) * 100).toFixed(1)}%`}
                                className="custom-progress-bar"
                            />
                            <div><br /><Link to='/nutrition'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={handleButtonClick2}>Submit & View Report</button></Link></div>
                            <div >
                                <DietPlan calorieRequirement={props.calories * 0.35} breakfastObjects={dinnerObjects2} />
                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>

    )
}



export default DailyDietRender