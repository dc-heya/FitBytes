import React, { Component } from 'react';
import ExerciseGoalCard from '../../components/ExerciseGoalCard';
import { Redirect } from 'react-router-dom';
import moment from "moment"
import axios from "axios"
import ExerciseLandingPage from '../../components/ExerciseGoalCard/ExerciseLandingPage';

const current_user = localStorage.getItem('userId');

class ExerciseGoal extends Component {
  state = {
    userId: localStorage.getItem('userId'),
    redirect: false,
    currentDayId: "",
    newExercise: "",
    newDuration: 0,
    newCalories: 0,
    dailyCalTotal: 0,
    dailyTotal: 0,
    todaysActivity: [],
    quantities: [],
    calorieTracker: [],
    dates: [],
    goalweight: 0,
    currentweight:0,
    goalmonths:0,
    age:0,
    height:0,
    gender:'',
    exercisefreq:''
  };


  componentDidMount() {
    // Sets the url to query
    let url = `/api/healthtracker/getDays/${localStorage.getItem('userId')}`
    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    console.log("userid - " + localStorage.getItem('userId'));
    this.setState({ userId: localStorage.getItem('userId') });
    let url2 = `/api/healthtracker/user/${localStorage.getItem('userId')}`;
    console.log('from ex page')
    axios.get(url2)
      .then(res=>{
      console.log(res.data)
      this.setState({
        goalweight:res.data.goalweight,
        currentweight:res.data.weight,
        goalmonths:res.data.goalmonths,
        age:res.data.age,
        height:res.data.height,
        gender:res.data.gender,
        exercisefreq:res.data.exercisefreq
      
      })
    }).catch(err=>{console.log(err)})


    axios.get(url)
      .then(res => {
        let data = res.data
        let exerciseQuantities = []
        let calQuantities = []
        let datesArr = []
        for (let i = data.length - 1; i >=0; i--) {
          exerciseQuantities.push(data[i].totalActivity)
          calQuantities.push(data[i].dailyCalTotal)
          datesArr.push(moment(data[i].date).format("MM/DD/YYYY"))
        }
        this.setState({
          currentDayId: data[0]._id,
          dailyTotal: data[0].totalActivity,
          dailyCalTotal: data[0].dailyCalTotal,
          todaysActivity: data[0].exercises,
          quantities: exerciseQuantities,
          calorieTracker: calQuantities,
          dates: datesArr,
          
        })
      })
      .catch(err => { console.log(err) })

      // this.generateExercisePlan();
      this.generateExercisePlan();
    }

  handleDurationChange(e) {
    this.setState({ newDuration: parseInt(e.target.value) }, () => {
      console.log(this.state.newDuration)
    });
  }

  handleExerciseChange(e) {
    this.setState({ newExercise: e.target.value }, () => {
      console.log(this.state.newExercise)
    })
  }

  addExercise() {
    const calorieBurnRates = {
      "Walking": 5,
      "Jogging": 8,
      "Running": 10,
      "Swimming": 12,
      "Cycling": 7,
      "Yoga": 3,
      "HIIT": 9,
      "Strength Training": 6,
      "stairStepper": 7,
      "boxing": 9,
      "other": 4 // Default value for other activities
    };
    //jo newExercise,newDuration,newCalories ye sab current exercise ka hai
    // let curr_cal = 0;
    const calorieBurnRate = calorieBurnRates[this.state.newExercise];
    const caloriesBurned = calorieBurnRate * this.state.newDuration;
    this.setState({ newCalories: caloriesBurned });
    // curr_cal += caloriesBurned;
    // this.setState({ dailyCalTotal: curr_cal });
    let newActivities = this.state.todaysActivity
    newActivities.push({ exercise: this.state.newExercise, duration: this.state.newDuration, calories: this.state.newCalories });

    this.setState(prevState => ({
      dailyTotal: prevState.dailyTotal + prevState.newDuration,
      dailyCalTotal: prevState.dailyCalTotal + prevState.newCalories,
      todaysActivity: newActivities
    }), () => {

      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.post('/api/healthTracker/newExercise', {
        exercise: this.state.newExercise,
        duration: this.state.newDuration,
        calories: this.state.newCalories,
        dailyCalTotal: this.state.dailyCalTotal,
        totalActivity: this.state.dailyTotal,
        currentDayId: this.state.currentDayId,
        userId: current_user
      })
        .then(data => console.log(data))
        .catch(err => {
          console.log(err)
        })
    })
  }
  generateExercisePlan() {
    console.log('hi inside exercise plan now')
    // console.log(-localStorage.getItem('dailycalgoal'))
    const dailycalgoal = (-localStorage.getItem('dailycalgoal') - this.state.dailyCalTotal);
    console.log(`daily cal goal inside exercise: ${dailycalgoal}`)
    if (dailycalgoal <= 0) {
      console.log('calories doe\'snt exist')
      return []; // Return an empty array if remaining calories are not positive
    }
    // Define exercise activities and their calorie burn rates
    const calorieBurnRates = {
      "Walking": 5,
      "Jogging": 8,
      "Running": 10,
      "Swimming": 12,
      "Cycling": 7,
      "Yoga": 3,
      "HIIT": 9,
      "Strength Training": 6,
      "stairStepper": 7,
      "boxing": 9,
      "other": 4
      // Add other activities and their burn rates here
    };

    let exercisePlan = [];
    let remainingCaloriesCopy = dailycalgoal;

    // Loop through activities and add them to the plan until remaining calories are 0 or negative
    Object.entries(calorieBurnRates).forEach(([activity, burnRate]) => {
      const randomDuration = Math.floor(Math.random() * (25 - 10 + 1)) + 10; // Generate a random duration between 10 and 25 minutes
      const caloriesBurned = burnRate * randomDuration;
      const duration = Math.min(Math.floor(remainingCaloriesCopy / caloriesBurned) * randomDuration, randomDuration); // Ensure duration does not exceed randomDuration
      const caloriesUsed = (caloriesBurned * duration) / randomDuration;

      if (duration > 0) {
        // console.log({ exercise: activity, duration, caloriesBurned })
        exercisePlan.push({ exercise: activity, duration, caloriesBurned });
        remainingCaloriesCopy -= caloriesUsed;
      }
    });

    // Check if the total calories suggested in the plan are less than the daily calorie goal
    const totalPlanCalories = exercisePlan.reduce((total, activity) => total + (calorieBurnRates[activity.exercise] * activity.duration), 0);
    if (totalPlanCalories < dailycalgoal) {
      // Calculate the additional calories needed to meet the daily calorie goal
      const additionalCalories = dailycalgoal - totalPlanCalories;

      // Add additional activities to meet the remaining calories
      Object.entries(calorieBurnRates).forEach(([activity, burnRate]) => {
        const randomDuration = Math.floor(Math.random() * (25 - 10 + 1)) + 10; // Generate a random duration between 10 and 25 minutes
        const caloriesBurned = burnRate * randomDuration;
        const duration = Math.min(Math.floor(additionalCalories / caloriesBurned) * randomDuration, randomDuration); // Ensure duration does not exceed randomDuration
        const caloriesUsed = (caloriesBurned * duration) / randomDuration;

        if (duration > 0) {
          exercisePlan.push({ exercise: activity, duration });
          remainingCaloriesCopy -= caloriesUsed;
        }
      });
    }
    console.log('exercise->plan');
    console.log(exercisePlan);
    // this.setState({ plannedActivities: exercisePlan }, () => {
    //     console.log('planned activity->');
    //     console.log(this.state.plannedActivities);
    // });
    console.log('setting in localstorage')
    localStorage.setItem('exercisePlan',JSON.stringify(exercisePlan))
    console.log('set in ls')
    console.log(localStorage.getItem('exercisePlan'))
    // return exercisePlan;
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />
    }
  };

  render() {
    // console.log('this is the exercise page')
    // console.log('exercise plan triggered')
    // console.log('planned activity->', this.state.plannedActivities);
    
    return (
      <div>
        {this.renderRedirect()}
        <ExerciseLandingPage />
        <ExerciseGoalCard
          dates={this.state.dates}
          quantities={this.state.quantities}
          calorieTracker={this.state.calorieTracker}
          totalActivity={this.state.dailyTotal}
          dailyCalTotal={this.state.dailyCalTotal}
          todaysActivities={this.state.todaysActivity}
          addExercise={this.addExercise.bind(this)}
          handleExerciseChange={this.handleExerciseChange.bind(this)}
          handleDurationChange={this.handleDurationChange.bind(this)}
          activity={this.state.newExercise}
          goalweight={this.state.goalweight}
          currentweight={this.state.currentweight}
          goalmonths={this.state.goalmonths}
          age={this.state.age}
          height={this.state.height}
          gender={this.state.gender}
          exercisefreq={this.state.exercisefreq}
          // generateExercisePlan={this.generateExercisePlan.bind(this)}
         
        
        />
      </div>
    );
  }
}

export default ExerciseGoal;
