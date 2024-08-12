import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ChartsLine from '../ChartsLine';
import './WeightGoal.css';
import BmiCalculator from '../BMIC/BmiCalculator';
import BMR from '../BMIC/BMR';
import CalorieChangeCalculator from '../BMIC/CalorieChangeCalculator';

import { Link } from 'react-router-dom';

const WeightGoalCard = (props) => {
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="temp">
      <div className='row weight-main'>
        <div className="col-md-3 weight-main-left">
          <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn" onClick={() => handleButtonClick('button1')}>
            <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button2')}>View Now</a>
          </button>
          <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
            <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button3')}>View Now</a>
          </button>
          <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
            <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button4')}>View Now</a>
          </button>
        </div>
        <div className="col-md-9 weight-main-right">

        </div>
      </div>
      <div className="weight-stats row">
        <div className="col-md-6">
          <p className="text-2xl text-bold m-4 text-center">YOUR GOAL</p>
          <p className='alert alert-success'>Your Current Weight: {props.currentweight}</p>
          <p>Your Goal Weight: {props.goalweight}</p>
          <p>Desired Months to achieve goal: {props.goalmonths}</p>
          <p>{props.goalweight < props.currentweight ? "Your goal is to lose weight" : "Your goal is to gain gain weight"}</p>
        </div>
        <div className="col-md-6">
        </div>

      </div>
      <div px-6>
        <Grid container justify="center">
          {/* <Grid item md={4}>
              <Paper className="" elevation={1} id="weightCardTracker">
                <Typography variant="title" align="center">
                  Your Goal
                </Typography>
                <br />
                <Paper align="center">
                  <p>Your Current Weight: {props.currentweight}</p>
                  <p>Your Goal Weight: {props.goalweight}</p>
                  <p>Desired Months to achieve goal: {props.goalmonths}</p>
                  <p>{props.goalweight < props.currentweight ? "Your goal is to lose weight" : "Your goal is to gain gain weight"}</p>
                  {/* <p>{props.goalweight < props.currentweight ? "Your calories need to be in deficit by 500-700 calories/day" : "Your calories need to be in surplus"}</p> 

                </Paper>

              </Paper>
            </Grid> */}
          <Grid item md={4}>
            <Paper className="" elevation={1} id="weightCardTracker">
              <Typography variant="title" align="center">
                Your BMR
              </Typography>

              <Paper align="center" className="" elevation={1} id="weightCardTracker">
                <BMR age={props.age} weight={props.currentweight} height={props.height} gender={props.gender} exercisefreq={props.exercisefreq} />
              </Paper>
            </Paper>

          </Grid>
          <Grid item md={4}>
            <Paper className="" elevation={1} id="weightCardTracker">
              <Typography variant="title" align="center">
                Your Daily Calorie Plan
              </Typography>

              <Paper align="center" className="" elevation={1} id="weightCardTracker">
                <CalorieChangeCalculator currentWeightKg={props.currentweight} goalWeightKg={props.goalweight} goalMonths={props.goalmonths} />
              </Paper><br />
              <p>Looking to lose Weight? Let's make an exercise plan</p>
              <Link to="/exercise"><button type="submit" className="mx-auto block w-60 justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900">Exercise Plan</button></Link>
              <p>Lookin to gain Weight? Let's make a diet plan</p>
              <Link to="/dailydiet"><button type="submit" className="mx-auto block w-60 justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900">Diet Plan</button></Link>
            </Paper>

          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} className={classes.center}>
            <Paper className="" elevation={1} id="weightCardTracker">
              <Typography align="center" variant="display1">
                Weight Tracker
              </Typography>
              <Typography className={classes.info}>
                Enter your current weigth below. Track as often as needed
              </Typography>
              <Paper className={classes.progressColorWeight}>
                <Typography align="center" variant="body2">Current Weight: {props.weight + " Kgs"} </Typography>
              </Paper>

              <form
                className={classes.container}
                noValidate
                autoComplete="off"
                align="center"
              >
                <TextField
                  id="addWeight"
                  label="Enter Weight"
                  fullWidth
                  // value={props.weight}
                  onChange={props.handleChange}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  value={props.updatedWeight}
                />
              </form>
              <Button onClick={props.handleClick} variant="contained" className={classes.buttonStyle}>
                Submit
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="" elevation={1} id="weightCardGraph">
              <Typography variant="title" align="center">
                History (Last 30 Days)
              </Typography>
              <ChartsLine quantities={props.quantities} dates={props.dates} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.center}>
            <Paper className="" elevation={1} id="weightCardTracker">
              <Typography variant="title" align="center">
                Your BMI
              </Typography>
              <Paper className={classes.progressColorWeight}><BmiCalculator weight={currentWeight} height='160' /></Paper>

            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WeightGoalCard



// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//     margin: "5% 4% -3% 4%"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit
//   },
//   container: {
//     width: '97%'
//   },
//   expansionPanelStyle: {
//     margin: 11
//   },
//   center: {
//     textAlign: 'center'
//   },
//   progressColorWeight: {
//     backgroundColor: '#4d66f08a',
//     marginLeft: '20%',
//     marginRight: '20%',
//     marginBottom: "28px",
//     marginTop: "19px",
//     padding: "4%",
//   },
//   buttonStyle: {
//     marginTop: "4%"
//   },
//   info: {
//     margin: "3% 8% 0% 8%"
//   }
// });

// class WeightGoalsComponent extends React.Component {



//   render() {
//     const { classes } = props;
//     const currentWeight = props.currentweight;
//     console.log('weightcard props')
//     console.log(props);
//     return (
//       <div className="temp">
//         <div className='row weight-main'>
//           <div className="col-md-3 weight-main-left">
//             <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn" onClick={() => handleButtonClick('button1')}>
//               <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button2')}>View Now</a>
//             </button>
//             <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
//               <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button3')}>View Now</a>
//             </button>
//             <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
//               <a href="#weight-main" className="ml-2" onClick={() => handleButtonClick('button4')}>View Now</a>
//             </button>
//           </div>
//           <div className="col-md-9 weight-main-right">

//           </div>
//         </div>
//         <div className="weight-stats row">
//           <div className="col-md-6">
//             <p className="text-2xl text-bold m-4 text-center">YOUR GOAL</p>
//             <p className='alert alert-success'>Your Current Weight: {props.currentweight}</p>
//             <p>Your Goal Weight: {props.goalweight}</p>
//             <p>Desired Months to achieve goal: {props.goalmonths}</p>
//             <p>{props.goalweight < props.currentweight ? "Your goal is to lose weight" : "Your goal is to gain gain weight"}</p>
//           </div>
//           <div className="col-md-6">
//           </div>

//         </div>
//         <div px-6>
//           <Grid container justify="center">
//             {/* <Grid item md={4}>
//               <Paper className="" elevation={1} id="weightCardTracker">
//                 <Typography variant="title" align="center">
//                   Your Goal
//                 </Typography>
//                 <br />
//                 <Paper align="center">
//                   <p>Your Current Weight: {props.currentweight}</p>
//                   <p>Your Goal Weight: {props.goalweight}</p>
//                   <p>Desired Months to achieve goal: {props.goalmonths}</p>
//                   <p>{props.goalweight < props.currentweight ? "Your goal is to lose weight" : "Your goal is to gain gain weight"}</p>
//                   {/* <p>{props.goalweight < props.currentweight ? "Your calories need to be in deficit by 500-700 calories/day" : "Your calories need to be in surplus"}</p> 

//                 </Paper>

//               </Paper>
//             </Grid> */}
//             <Grid item md={4}>
//               <Paper className="" elevation={1} id="weightCardTracker">
//                 <Typography variant="title" align="center">
//                   Your BMR
//                 </Typography>

//                 <Paper align="center" className="" elevation={1} id="weightCardTracker">
//                   <BMR age={props.age} weight={props.currentweight} height={props.height} gender={props.gender} exercisefreq={props.exercisefreq} />
//                 </Paper>
//               </Paper>

//             </Grid>
//             <Grid item md={4}>
//               <Paper className="" elevation={1} id="weightCardTracker">
//                 <Typography variant="title" align="center">
//                   Your Daily Calorie Plan
//                 </Typography>

//                 <Paper align="center" className="" elevation={1} id="weightCardTracker">
//                   <CalorieChangeCalculator currentWeightKg={props.currentweight} goalWeightKg={props.goalweight} goalMonths={props.goalmonths} />
//                 </Paper><br />
//                 <p>Looking to lose Weight? Let's make an exercise plan</p>
//                 <Link to="/exercise"><button type="submit" className="mx-auto block w-60 justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900">Exercise Plan</button></Link>
//                 <p>Lookin to gain Weight? Let's make a diet plan</p>
//                 <Link to="/dailydiet"><button type="submit" className="mx-auto block w-60 justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900">Diet Plan</button></Link>
//               </Paper>

//             </Grid>
//           </Grid>
//           <Grid container spacing={8}>
//             <Grid item xs={12} sm={6} className={classes.center}>
//               <Paper className="" elevation={1} id="weightCardTracker">
//                 <Typography align="center" variant="display1">
//                   Weight Tracker
//                 </Typography>
//                 <Typography className={classes.info}>
//                   Enter your current weigth below. Track as often as needed
//                 </Typography>
//                 <Paper className={classes.progressColorWeight}>
//                   <Typography align="center" variant="body2">Current Weight: {props.weight + " Kgs"} </Typography>
//                 </Paper>

//                 <form
//                   className={classes.container}
//                   noValidate
//                   autoComplete="off"
//                   align="center"
//                 >
//                   <TextField
//                     id="addWeight"
//                     label="Enter Weight"
//                     fullWidth
//                     // value={props.weight}
//                     onChange={props.handleChange}
//                     type="number"
//                     className={classes.textField}
//                     margin="normal"
//                     value={props.updatedWeight}
//                   />
//                 </form>
//                 <Button onClick={props.handleClick} variant="contained" className={classes.buttonStyle}>
//                   Submit
//                 </Button>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Paper className="" elevation={1} id="weightCardGraph">
//                 <Typography variant="title" align="center">
//                   History (Last 30 Days)
//                 </Typography>
//                 <ChartsLine quantities={props.quantities} dates={props.dates} />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6} className={classes.center}>
//               <Paper className="" elevation={1} id="weightCardTracker">
//                 <Typography variant="title" align="center">
//                   Your BMI
//                 </Typography>
//                 <Paper className={classes.progressColorWeight}><BmiCalculator weight={currentWeight} height='160' /></Paper>

//               </Paper>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     );
//   }
// }

// WeightGoalsComponent.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(WeightGoalsComponent);
