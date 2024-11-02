import React from 'react';
import './CalorieCounter.css'; // Optional: create this file for custom styling

function CalorieCounter({ bmi, calories, checkCalorieIntake }) {
  return (
    <div className='calorie-main'>
      <h1>Calorie Counter</h1>
      <p>This app tracks your daily calorie intake</p>

      {/* Display BMI */}
      <div className='output-section'>
        <p>Your BMI: {bmi}</p>
      </div>

      {/* Calorie Intake Section */}
      <div className='input-section'>
        <p className='slider-output'>Daily Calories: {calories} kcal</p>
        <input
          type="range"
          min="1000"
          max="4000"
          value={calories}
          readOnly // Make the slider read-only as it's just for display
        />
      </div>

      {/* Calorie Check Output */}
      <div className='output-section'>
        <p>{checkCalorieIntake()}</p>
      </div>

      <p>Double-click anywhere to go back to BMI Calculator</p>
    </div>
  );
}

export default CalorieCounter;
