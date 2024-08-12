import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
const LandingPage = () => {
  return (

    <div className="bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center justify-end" style={{ backgroundImage: `url('/assets/images/background.jpg')` }}>
      <div className="max-w-4xl px-8 py-16 text-center text-black md:pl-20" >
        <div className="mb-16">
          <img src="/assets/images/logo_line.png" alt="FITBYTES" className="w-50 md:w-45 mx-auto mb-4" />

    
        </div>
        <div className="mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FitBytes</h1>
          <p className="text-lg md:text-xl mb-8">Your journey to fitness starts here.</p>
          <div className="flex justify-center mb-8">
            <Link to='/signup'>
              <button className="bg-white text-grey-2 hover:bg-grey-200 hover:text-white py-3 px-6 rounded-full font-semibold text-lg md:text-xl shadow-lg transition duration-300 ease-in-out">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <p className="text-sm md:text-base">Already have an account? <Link to="/login" className="underline">Sign In</Link></p>
      </div>
    </div>
  );
};

export default LandingPage;