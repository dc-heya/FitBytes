import React from 'react'
import {Link} from 'react-router-dom'
import './WeightLandingPage.css'
// import DailyDietSVG from '/assets/images/dailydiet.svg';

const WeightLandingPage = () => {
    return (
        <div className="landing-page-weight">
            <div className="left-section">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">Weight Tracker</h1>
                <p className="text-xl md:text-3xl font-bold">Your Personalized Path to Wellness</p>
                <p className="text-lg md:text-2xl">Track, Analyze, and Achieve Your Weight Goals</p>
                <button k className="btn btn-lg rounded-pill m-1 custom-selected-btn">
                    <a href="#weight-main" className="ml-2">View Now</a>
                </button>
            </div>
            <div className="right-section">
                <img src='/assets/images/weight_loss.jpg' alt="Daily Diet" />
            </div>
        </div>
    );
}

export default WeightLandingPage