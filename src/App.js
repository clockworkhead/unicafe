import React from 'react'

import './App.css';
import { useState } from 'react';
import { Statistics } from './components/Statistics';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text} 
  </button>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hide, setHide] = useState(true) 
  

  const handleGood = () => {
    const increment = good + 1
    setGood(increment)
    setHide(false)
  }

  const handleNeutral = () => {
    const increment = neutral + 1
    setNeutral(increment)
    setHide(false)
  }

  const handleBad = () => {
    const increment = bad + 1
    setBad(increment)
    setHide(false)
  }

  

  return (
    <div>  
      <h2>Give feedback</h2>
      <Button handleClick={handleGood} text = "good" />
      <Button handleClick={handleNeutral} text = "neutral"/>
      <Button handleClick={handleBad} text = "bad"/>
      <br/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  );
}

export default App;
