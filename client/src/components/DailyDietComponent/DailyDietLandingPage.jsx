import React from 'react'
import './DailyDietLandingPage.css'
// import DailyDietSVG from '/assets/images/dailydiet.svg';

const DailyDietLandingPage = () => {
    return (
        <div className="landing-page-diet">
            <div className="left-section">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">Daily Diet Planner</h1>
                <p className="text-xl md:text-3xl font-bold">Your Personalized Path to Wellness</p>
                <button className="btn btn-lg rounded-pill m-1 custom-selected-btn">
                    <a href="#diet-main" className="ml-2">View Now</a>
                </button>
            </div>
            <div className="right-section">
                <img src='/assets/images/dailydiet.svg' alt="Daily Diet" />
            </div>
        </div>
    );
}

export default DailyDietLandingPage
