import { set } from 'mongoose';
import React, { useState } from 'react';

const Tag = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [iconClass, setIconClass] = useState('fa-plus');
    const [bgClass, setBgClass] = useState('bg-blue-400');


    const handleClick = () => {
        setIsExpanded(!isExpanded);
        setIconClass(isExpanded ? 'fa-minus' : 'fa-plus');
        setBgClass(isExpanded ? 'bg-pink-400' : 'bg-blue-400');
    };

    return (
        <div>
            <button className={`px-4 py-2 cursor-pointer ${bgClass} text-white flex justify-center items-center`} onClick={handleClick}>
                <i class={`fa ${iconClass}`}></i>
                {/* className={`badge bg-${bootstrapClass}`} */}
                <span class="ml-2">{props.fooditem}</span>
            </button>
        </div>

    );
};

export default Tag;
