import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BMR from '../BMIC/BMR';
import CalorieChangeCalculator from '../BMIC/CalorieChangeCalculator';
import './index.css';
import { Link } from 'react-router-dom';
import ChartsLine from './../ChartsLine';
import ChartsBar from './../ChartsBar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "5% 4% -1% 4%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 200
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  },
  rootList: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    // overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  },
  header: {
    marginBottom: "-4%"
  },
  formRoot: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    textAlign: 'center'
  },
  progressColor: {
    backgroundColor: '#27DEBF',
    marginLeft: '19%',
    marginRight: '19%',
    marginBottom: '28px',
    marginTop: '19px',
    padding: '4px'
  },
  info: {
    margin: "3% 2% 0% 2%"
  },
  graphPaper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "5% 4% 16% 4%"
  }
});

class ExerciseGoalCard extends React.Component {
  renderTableRows(arr) {
    return (
      arr.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.exercise}</td>
            <td>{element.duration} Minutes</td>
            {/* <td>{element.calories} Calories</td> Uncomment this line if you want to display calories */}
          </tr>
        )
      })
    )
  }
  renderTableRows2(arr) {
    if (!arr) {
        console.log('planned activities didn\'t pass');
        return (
            <tr>
                <td colSpan="3">No activities planned</td>
            </tr>
        );
    } else {
        console.log('arr->');
        console.log(arr);
        console.log(typeof arr);
      
        let explan = [];
        try {
            explan = JSON.parse(arr);
            // Check if parsed data is an array
            if (!Array.isArray(explan)) {
                throw new Error('Data retrieved from localStorage is not an array.');
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
        
        if (explan.length === 0) {
            return (
                <tr>
                    <td colSpan="3">No activities planned</td>
                </tr>
            );
        }
        
        return explan.map((element, index) => (
            <tr key={index}>
                <td>{element && element.exercise ? element.exercise : '-'}</td>
                <td>{element && element.duration ? `${element.duration} Minutes` : '-'}</td>
                <td>{element && element.caloriesBurned ? `${element.caloriesBurned} Calories` : '-'}</td>
            </tr>
        ));
    }
}
  // generateExercisePlan(remainingCalories) {
  //   if (remainingCalories <= 0) {
  //     return []; // Return an empty array if remaining calories are not positive
  //   }
  //   // Define exercise activities and their calorie burn rates
  //   const calorieBurnRates = {
  //     "Walking": 5,
  //     "Jogging": 8,
  //     "Running": 10,
  //     "Swimming": 12,
  //     "Cycling": 7,
  //     "Yoga": 3,
  //     "HIIT": 9,
  //     "Strength Training": 6,
  //     "stairStepper": 7,
  //     "boxing": 9,
  //     "other": 4
  //     // Add other activities and their burn rates here
  //   };

  //   let exercisePlan = [];
  //   let remainingCaloriesCopy = remainingCalories;

  //   // Loop through activities and add them to the plan until remaining calories are 0 or negative
  //   Object.entries(calorieBurnRates).forEach(([activity, burnRate]) => {
  //     const randomDuration = Math.floor(Math.random() * (25 - 10 + 1)) + 10; // Generate a random duration between 10 and 25 minutes
  //     const caloriesBurned = burnRate * randomDuration;
  //     const duration = Math.min(Math.floor(remainingCaloriesCopy / caloriesBurned) * randomDuration, randomDuration); // Ensure duration does not exceed randomDuration
  //     const caloriesUsed = (caloriesBurned * duration) / randomDuration;

  //     if (duration > 0) {
  //       exercisePlan.push({ exercise: activity, duration, caloriesBurned });
  //       remainingCaloriesCopy -= caloriesUsed;
  //     }
  //   });

  //   // Check if the total calories suggested in the plan are less than the daily calorie goal
  //   const totalPlanCalories = exercisePlan.reduce((total, activity) => total + (calorieBurnRates[activity.exercise] * activity.duration), 0);
  //   if (totalPlanCalories < remainingCalories) {
  //     // Calculate the additional calories needed to meet the daily calorie goal
  //     const additionalCalories = remainingCalories - totalPlanCalories;

  //     // Add additional activities to meet the remaining calories
  //     Object.entries(calorieBurnRates).forEach(([activity, burnRate]) => {
  //       const randomDuration = Math.floor(Math.random() * (25 - 10 + 1)) + 10; // Generate a random duration between 10 and 25 minutes
  //       const caloriesBurned = burnRate * randomDuration;
  //       const duration = Math.min(Math.floor(additionalCalories / caloriesBurned) * randomDuration, randomDuration); // Ensure duration does not exceed randomDuration
  //       const caloriesUsed = (caloriesBurned * duration) / randomDuration;

  //       if (duration > 0) {
  //         exercisePlan.push({ exercise: activity, duration });
  //         remainingCaloriesCopy -= caloriesUsed;
  //       }
  //     });
  //   }

  //   return exercisePlan;
  // }



  render() {
    const { classes } = this.props;
    // console.log(this.props);
    // console.log('goal card main palnnedactivities')
    // console.log(this.props.plannedActivity)
    const dailycalgoal = (-localStorage.getItem('dailycalgoal') - this.props.dailyCalTotal);
    console.log(`daily cal goal : ${dailycalgoal}`)
    // const plannedActivity = this.props.generateExercisePlan(dailycalgoal);
    const totalLeftMessage = dailycalgoal <= 0 ? "Congratulations you have achieved your daily goal" : `Total Left: ${dailycalgoal}`;

    return (
      <div id="exercise-main">
        <Grid container spacing={8} justify="center">
          <Grid item xs={10} md={4} justify="center">
            <Paper className={classes.root} elevation={1} id="exerciseCard">
              <Typography variant="title" className={classes.heading} align="center">
                Exercise Plan
              </Typography>
              <table className="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Exercises</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  // console.log(this.props.plannedActivity)
                  this.renderTableRows2(localStorage.getItem('exercisePlan'))
                  }
                </tbody>
              </table>
              <p class="text-teal-800 font-weight-bold text-center">
                Total Goal Calories to be burned : {-localStorage.getItem('dailycalgoal')}<br />
                {totalLeftMessage}
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} justify="center">
            <Paper className={classes.root} elevation={1} >
              <Typography className={classes.info} align="center">
                Select a workout below and choose the duration of the activity.
                Each activity will be tracked in minutes. Your daily workouts are displayed
                below along with a historic graph of the last 7 days.
              </Typography>

              <Paper className={classes.progressColor}>
                <Typography align="center" variant="body2">
                  Current Progress: {this.props.totalActivity} mins
                </Typography>
              </Paper>



              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <form
                    align="center"
                    className={classes.formRoot}
                    autoComplete="off"
                  >
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="workout-simple">Workouts</InputLabel>
                      <Select
                        value={this.props.activity}
                        onChange={this.props.handleExerciseChange}
                        inputProps={{ name: 'activity', id: 'workout-simple' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Walking'}>Walking</MenuItem>
                        <MenuItem value={'Jogging'}>Jogging</MenuItem>
                        <MenuItem value={'Running'}>Running</MenuItem>
                        <MenuItem value={'Swimming'}>Swimming</MenuItem>
                        <MenuItem value={'Cycling'}>Cycling</MenuItem>
                        <MenuItem value={'Yoga'}>Yoga</MenuItem>
                        <MenuItem value={'HIIT'}>HIIT</MenuItem>
                        <MenuItem value={'Strength Training'}>
                          Strength Training
                        </MenuItem>
                        <MenuItem value={'stairStepper'}>
                          Stair Stepper
                        </MenuItem>
                        <MenuItem value={'boxing'}>Boxing</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                      </Select>
                      <FormHelperText>
                        Select the workout and duration
                      </FormHelperText>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addMinutes"
                      label="Enter Minutes"
                      value={this.props.minutes}
                      onChange={this.props.handleDurationChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="minutes"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid className={classes.submit} item xs={12}>
                  <Button onClick={this.props.addExercise} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>


        </Grid>
        <div className="container">
          <Grid container spacing={8} justify="center">
            <Grid item xs={10} md={4} justify="center">
              <Paper className={classes.root} elevation={1} id="exerciseCard">
                <Typography variant="title" className={classes.heading} align="center">
                  Today
                </Typography>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Exercises</th>
                      <th scope="col">Duration</th>
                      {/* <th scope="col">Calories</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTableRows(this.props.todaysActivities)}
                  </tbody>
                </table>
                <p class="text-teal-800 font-weight-bold text-center">
                  Total Duration:{this.props.totalActivity} mins<br></br>
                  Total Calories:{this.props.dailyCalTotal} kcal<br />
                  {/* Total Goal Calories to be burned :{-localStorage.getItem('dailycalgoal')}<br/> */}
                  {/* Total left:{(-localStorage.getItem('dailycalgoal'))-this.props.dailyCalTotal} */}
                  {totalLeftMessage}
                </p>
              </Paper>
            </Grid>
            <Grid item xs={10} md={4} justify="center">
              <Paper className={classes.graphPaper} elevation={1}>
                <Typography className={classes.heading} variant="title" align="center">Duration History (Last 7 Days)</Typography>
                <ChartsLine quantities={this.props.quantities} dates={this.props.dates} />
              </Paper>
            </Grid>
            <Grid item xs={10} md={4} justify="center">
              <Paper className={classes.graphPaper} elevation={1}>
                <Typography className={classes.heading} variant="title" align="center">Calorie History (Last 7 Days)</Typography>
                <ChartsLine quantities={this.props.calorieTracker} dates={this.props.dates} />
              </Paper>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

ExerciseGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExerciseGoalCard);
