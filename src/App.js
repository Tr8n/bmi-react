import React, { useState } from 'react';
import './App.css';
import CalorieCounter from './CalorieCounter';

function App() {
  const [weight, setWeight] = useState(80); // Initialize weight in kg
  const [height, setHeight] = useState(170); // Initialize height in cm
  const [calories, setCalories] = useState(2000); // Initialize calorie count
  const [showCalorieCounter, setShowCalorieCounter] = useState(false); // Toggle between pages

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleCalorieChange = (e) => {
    setCalories(e.target.value);
  };

  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    return bmi;
  };

  // Function to estimate daily calorie needs based on BMI
  const calculateCaloriesNeeded = (bmi) => {
    // Rough estimate: Calories needed based on BMI
    // Adjust the formula as needed for more accuracy
    const caloriesNeeded = (15 * weight).toFixed(0);
    return caloriesNeeded;
  };

  const checkCalorieIntake = (bmi) => {
    const caloriesNeeded = calculateCaloriesNeeded(bmi);

    if (calories > caloriesNeeded) {
      return `You're consuming too many calories! You should reduce your intake by ${calories - caloriesNeeded} kcal.`;
    } else if (calories < caloriesNeeded) {
      return `You're consuming too few calories! You should increase your intake by ${caloriesNeeded - calories} kcal.`;
    } else {
      return "Your calorie intake is perfect!";
    }
  };

  const bmi = calculateBMI();

  return (
    <div className='main'>
      {showCalorieCounter ? (
        <div onDoubleClick={() => setShowCalorieCounter(false)}>
          <CalorieCounter
            bmi={bmi}
            calories={calories}
            checkCalorieIntake={() => checkCalorieIntake(bmi)}
          />
        </div>
      ) : (
        <div>
          <h1>Body Mass Calculator & Calorie Checker</h1>
          <p>This app requires user input</p>

          {/* Weight Section */}
          <div className='input-section'>
            <p className='slider-output'>Weight: {weight}kg</p>
            <input
              type="range"
              min="40"
              max="150"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>

          {/* Height Section */}
          <div className='input-section'>
            <p className='slider-output'>Height: {height}cm</p>
            <input
              type="range"
              min="100"
              max="220"
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          {/* BMI Output */}
          <div className='output-section'>
            <p>Your BMI: {bmi}</p>
          </div>

          {/* Calorie Counter Section */}
          <button className='btn' onClick={() => setShowCalorieCounter(true)}>
            Go to Calorie Counter
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
