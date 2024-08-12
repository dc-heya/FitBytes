import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from './vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg';
import { Link } from 'react-router-dom';

const DashBoardLanding = () => {
    // const defaultImage = './vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg';
    const [opacity, setOpacity] = useState(1);
    const [backgroundImage, setBackgroundImage] = useState(defaultImage);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;
            let minHeight = 0;
            let maxHeight = 600;
            let opacity = (maxHeight - scrollTop) / (maxHeight - minHeight);
            setOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random?query=healthy_food&client_id=qaXBIJVfJkVtwuzpmNB91E_PzQj3TcqePYhT2ifpnDE');
                setBackgroundImage(response.data.urls.regular);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();
        const intervalId = setInterval(fetchImage, 5000); // Fetch a new image every 5 seconds

        return () => clearInterval(intervalId); // Clear the interval when the component unmounts
    }, []);

    return (
        <div className="background-image" style={{
            backgroundImage: `linear-gradient(to bottom, #00000051, #00000051),url(${backgroundImage})`,
            // opacity: opacity,
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Centers the background image
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <p className='text-4xl md:text-7xl font-bold text-white'>Welcome To FitBytes</p>
            <p className='text-2xl md:text-3xl text-white'>Let's see your today's progress</p>
            <button className="btn btn-lg rounded-pill m-1 custom-selected-btn">
                <a href="#main-dash" className="ml-2">View Now</a>
            </button>
        </div>
    );
}

export default DashBoardLanding;