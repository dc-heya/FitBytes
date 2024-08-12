import React, { useState } from 'react'
import './WeightGoal.css'
import BmiCalculator from '../BMIC/BmiCalculator';
import BMR from '../BMIC/BMR';
import CalorieChangeCalculator from '../BMIC/CalorieChangeCalculator';
import LineGraph from '../ApexChartLine/LineGraph';
import { Link } from 'react-router-dom';

const WeightGoalCard = (props) => {
    const [activeButton, setActiveButton] = useState('button2');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };


    return (
        <div className="weight-outer">
            <div className='container-fluid row weight-main'>
                <div className="col-md-5 weight-main-left">
                    {/* <button class="btn btn-lg custom-btn-style-weight rounded-pill" onClick={() => handleButtonClick('button1')}>YOUR GOALS</button> */}
                    <button class="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={() => handleButtonClick('button2')}>YOUR WEIGHT STATS</button>
                    <button class="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={() => handleButtonClick('button3')}>DIET AND EXERCISE PLANS</button>
                    <button class="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={() => handleButtonClick('button4')}>HISTORY</button>
                    <button class="btn btn-lg custom-btn-style-weight rounded-pill w-100" onClick={() => handleButtonClick('button5')}>UPDATE WEIGHT</button>
                </div>
                <div className="col-md-7 weight-main-right">
                    
                    {activeButton === 'button2' &&
                        <div className="weight-stats card p-5 uni">
                            <div className="text-2xl font-weight-bold text-center mb-4"> WEIGHT STATS </div>
                            <div className="user-stats">
                                <div className="alert alert-warning"><span className="font-weight-bold">AGE </span><br /> {props.age} years</div>
                                <div className="alert alert-warning"><span className="font-weight-bold">HEIGHT </span><br /> {props.height} cm</div>
                                <div className="alert alert-warning"><span className="font-weight-bold">WEIGHT </span><br /> {props.currentweight}</div>
                                <div className="alert alert-warning"><span className="font-weight-bold">EXERCISE LEVEL </span><br /> {props.exercisefreq}</div>
                                <div className='alert alert-warning'><span className="font-weight-bold">GENDER </span><br /> {props.gender}</div>

                            </div>
                            <div className="row">

                                <div className="col-md-6" style={{height: '100%'}}>
                                    <p className="text-2xl text-bold m-4 text-center">YOUR BMR</p>
                                    <BMR age={props.age} weight={props.currentweight} height={props.height} gender={props.gender} exercisefreq={props.exercisefreq} />

                                </div>
                                <div className="col-md-6">
                                    <p className="text-2xl text-bold m-4 text-center">YOUR BMI</p>
                                    <BmiCalculator weight={props.currentweight} height={props.height} />
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 'button3' &&
                        <div className="diet-exercise card p-2 uni">
                            <div className="card-body">
                                <p className="text-2xl font-weight-bold text-center mb-2">YOUR DAILY CALORIE PLAN</p>
                                {/* <div className="mb-3"> */}
                                    <div className="d-flex justify-content-between align-items-center m-1">
                                        <div className='alert alert-success '>Your Current Weight <br /> {props.currentweight} Kg </div>
                                        < i class="fa-solid fa-arrow-right-long" style={{color: '#1765ee', fontSize: '30px'}} />
                                        <div className='alert alert-success '>Your Goal Weight <br /> {props.goalweight} Kg</div>
                                    </div>
                                    <p className='text-lg font-weight-bold text-center'>{props.goalweight < props.currentweight ? "Your goal is to lose weight " : "Your goal is to gain weight "} in {props.goalmonths} months !</p>
                                    <div className="alert alert-warning mb-3">
                                        <CalorieChangeCalculator currentWeightKg={props.currentweight} goalWeightKg={props.goalweight} goalMonths={props.goalmonths} />
                                    </div>

                                    <div className="alert alert-info d-flex justify-content-center align-items-center flex-column " style={{ width: '100%' }}><p>Looking to lose weight? Let's make an exercise plan</p>
                                        <Link to="/exercise#exercise-main" className="btn w-60 custom-selected-food-btn rounded-pill">Exercise Plan</Link>
                                    </div>

                                    <div className="alert alert-danger d-flex justify-content-center align-items-center flex-column" style={{ width: '100%' }}>

                                        <p>Looking to gain weight? Let's make a diet plan</p>
                                        <Link to="/dailydiet#diet-main" className="btn w-60 custom-selected-food-btn rounded-pill">Diet Plan</Link>
                                    </div>

                                {/* </div> */}
                            </div>


                        </div>
                    }
                    {activeButton === 'button4' &&
                        <div className="history card d-flex justify-content-center align-items-center uni">
                            <p className="text-2xl font-weight-bold text-center mb-4">HISTORY</p>
                            <LineGraph quantities={props.quantities} dates={props.dates} />
                        </div>
                    }
                    {activeButton === 'button5' &&
                        <div class="update-weight card p-4 uni">
                            <h2 class="text-2xl font-weight-bold text-center mb-4">WEIGHT TRACKER</h2>
                            <div class="alert alert-info update-weight-form" style={{ height: '100%' }}>

                                <h3 class="text-center mb-4">Current Weight: {props.currentweight + " Kgs"} </h3>
                                <form>
                                    <div class="form-group">
                                        <label for="weight">Weight (kg)</label>
                                        <input type="number" className="form-control" id="weight" placeholder="Enter your weight"
                                            onChange={props.handleChange}
                                            margin="normal"
                                            value={props.updatedWeight} />
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block" onClick={props.handleClick}>Submit</button>
                                </form>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default WeightGoalCard