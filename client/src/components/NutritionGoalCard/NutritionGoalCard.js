import React from 'react';
import { useState, useEffect } from 'react';
import NutritionGoalChart from './NutritionGoalChart';
import Grid from '@material-ui/core/Grid';
import './index.css';
const NutritionGoalCard = () => {

 // Assume totalNutrients is passed as a prop  
console.log('islocalstorage empty?');
console.log(localStorage.getItem('totalNutrients'));
const storedTotalNutrientsString = localStorage.getItem('totalNutrients');
// console.log('hello2');
// console.log(storedTotalNutrientsString);
let storedTotalNutrients = {};
if (storedTotalNutrientsString) {
    storedTotalNutrients = JSON.parse(storedTotalNutrientsString);
}
// console.log('hello3');
// console.log(storedTotalNutrients.Breakfast);

  return (

    <div className="container">
      <Grid container spacing={8} justify="center" align="center">
        <h1 className="text-3xl md:text-4xl font-bold m-4">Meal Nutrition Graphs</h1>
        <Grid container spacing={8} justify="center">

          <Grid item xs={12} md={6} justify="center">
            BREAKFAST
            <NutritionGoalChart totalNutrients={storedTotalNutrients.Breakfast} />

          </Grid>
          <Grid item xs={12} md={6} justify="center">
            LUNCH
            <NutritionGoalChart totalNutrients={storedTotalNutrients.Lunch} />

          </Grid>
          <Grid item xs={12} md={6} justify="center">
            SNACKS
            <NutritionGoalChart totalNutrients={storedTotalNutrients.Snacks} />

          </Grid>
          <Grid item xs={12} md={6} justify="center">
            DINNER
            <NutritionGoalChart totalNutrients={storedTotalNutrients.Dinner} />

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NutritionGoalCard;