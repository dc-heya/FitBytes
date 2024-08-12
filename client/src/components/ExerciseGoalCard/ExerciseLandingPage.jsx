import React from 'react'
import {Link} from 'react-router-dom'
import './ExerciseLandingPage.css'
// import DailyDietSVG from '/assets/images/dailydiet.svg';

const ExerciseLandingPage = () => {
    return (
        <div className="landing-page-exercise">
            <div className="left-section">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">Exercise Tracker</h1>
                <p className="text-xl md:text-3xl font-bold">Exercise Plan Recommendation</p>
                <p className="text-lg md:text-2xl">Work-out your way to fitness!</p>
                <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
                    <a href="#exercise-main" className="ml-2">View Now</a>
                </button>
            </div>
            <div className="right-section">
                <img src='/assets/images/exercise.svg' alt="Daily Diet" />
            </div>
        </div>
    );
}

export default ExerciseLandingPage