import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export function Avg({g, n, b}){
  let avg = ((g - b) / (g + n + b)) * 100
  return(
    <div>
      average {avg}
    </div>
  );
}

export function Pos({g, n, b}){
  let pos = g / (g + n + b)
  return(
    <div>
     positive {pos} %
    </div>
  );
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    console.log('value now', newGood)
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    console.log('value now', newNeutral)
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    console.log('value now', newBad)
    setBad(newBad)
  }

  return (
    <div>  
      <h2>Give feedback</h2>
      <Button handleClick = {() => setToGood(good + 1)} text = "good"/>
      <Button handleClick = {() => setToNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {() => setToBad(bad + 1)} text = "bad"/>
      <br/>
      <h2>stattistics</h2>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {bad + good + neutral} <br/>
      <Avg g = {good} n = {neutral} b = {bad}/> 
      <Pos g = {good} n = {neutral} b = {bad} />
    </div>
  );
}

export default App;
