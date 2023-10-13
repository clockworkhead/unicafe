import React from 'react'

import './App.css';
import { useState } from 'react';
import { Statistics } from './components/statisticsComponent';

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
    console.log('value now', good)
    setGood(good + 1)
    setHide(false)
  }

  const handleNeutral = () => {
    console.log('value now', neutral)
    setNeutral(neutral + 1)
    setHide(false)
  }

  const handleBad = () => {
    console.log('value now', bad)
    setBad(bad + 1)
    setHide(false)
  }

  

  return (
    <div>  
      <h2>Give feedback</h2>
      <Button handleClick = {handleGood} text = "good" />
      <Button handleClick = {handleNeutral} text = "neutral"/>
      <Button handleClick = {handleBad} text = "bad"/>
      <br/>
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/> 
    </div>
  );
}

export default App;
