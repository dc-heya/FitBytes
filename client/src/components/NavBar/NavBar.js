import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-opacity-50 backdrop-blur-md border-b border-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-14" src="/assets/images/logo_crop.png" alt="FitBytes" />
              <span className="text-black ml-2 font-bold text-lg animation-slide-right">FitBytes</span>
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/home" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Home</NavLink>
            {/* <NavLink to="/water" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Water</NavLink> */}
            {/* <NavLink to="/nutrition" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Nutrition</NavLink> */}
            <NavLink to="/weight" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Weight</NavLink>
            <NavLink to="/dailydiet" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Diet</NavLink>

            <NavLink to="/exercise" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">Exercise</NavLink>
            <NavLink to="/info" className="text-gray-800 hover:text-gray-600 px-3 py-2 font-large" activeClassName="btn btn-sm rounded-pill custom-nav-link">More Information</NavLink>
            {localStorage.getItem('jwtToken') ?
              (
                <button className='btn btn-sm rounded-pill custom-nav-link' onClick={logout}>
                   <div className="d-flex justify-content-between align-items-center"> 
                    Logout
                    <i class="fa-solid fa-right-from-bracket m-1" />                    
                  </div>
                </button>
              ) : (
                <button className='btn btn-sm rounded-pill custom-nav-link' href="/login">
                  <div className="d-flex justify-content-between align-items-center"> 
                    Login
                    <i class="fa-solid fa-right-to-bracket m-1" />
                  </div>
                </button>
              )}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 ">
          <Link to="/home" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Home</Link>
          {/* <Link to="/water" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Water</Link> */}
          {/* <Link to="/nutrition" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Nutrition</Link> */}
          <Link to="/weight" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Weight</Link>
          <Link to="/dailydiet" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Diet</Link>

          <Link to="/exercise" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">Exercise</Link>
          <Link to="/info" className="block text-center text-gray-800 hover:text-gray-600 px-3 py-2 font-large">More Information</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;