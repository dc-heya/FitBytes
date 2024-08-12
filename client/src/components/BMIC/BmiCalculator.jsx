import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";

const BmiCalculator = (props) => {

    const heightInMeters = props.height / 100;
    let selectedStrokeColor = '#000';

    const bmi = props.weight / (heightInMeters * heightInMeters);
    let message = '';
    if (bmi < 18.5) {
        message = 'You are Underweight';
        selectedStrokeColor = '#00f';
    } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight';
        selectedStrokeColor = '#008700';
    } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight';
        selectedStrokeColor = '#ffdd00';
    } else {
        message = 'You are Obese';
        selectedStrokeColor = '#c40909';
    }
    const roundedBMI = bmi.toFixed(2);

    return (
        <div className='alert alert-primary d-flex flex-column align-items-center justify-content-center font-weight-bold text-center' >
            {/* <p>Weight: {props.weight} kg</p>
            <p>Height: {props.height} cm</p> */}
            <p>BMI: {roundedBMI}</p>

            <SemiCircleProgressBar
                percentage={roundedBMI * 2}
                // showPercentValue
                stroke={selectedStrokeColor}
                background="#00000053"
                strokeWidth={20}
            />
            <p>Status: {message}</p>
        </div>
    );
}

export default BmiCalculator