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
       {avg}
    </div>
  );
}

export function Pos({g, n, b}){
  let pos = g / (g + n + b)
  return(
    <div>
     {pos} %
    </div>
  );
}

export function Statistics({g, n, b}){
  return(
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{g}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{n}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{b}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{b + g + n}</td>
        </tr>
        <tr>
          <td>average</td>
          <td><Avg g = {g} n = {n} b = {b}/> </td>
        </tr>
        <tr>
          <td>positive</td>
          <td><Pos g = {g} n = {n} b = {b} /></td>
        </tr>   
      </table>
    </div>
  );
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hide, setHide] = useState(true) 

  const setToGood = newGood => {
    console.log('value now', newGood)
    setGood(newGood)
    setHide(false)
  }

  const setToNeutral = newNeutral => {
    console.log('value now', newNeutral)
    setNeutral(newNeutral)
    setHide(false)
  }

  const setToBad = newBad => {
    console.log('value now', newBad)
    setBad(newBad)
    setHide(false)
  }

  

  return (
    <div>  
      <h2>Give feedback</h2>
      <Button handleClick = {() => setToGood(good + 1)} text = "good" />
      <Button handleClick = {() => setToNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {() => setToBad(bad + 1)} text = "bad"/>
      <br/>
      <h2>statistics</h2>
    <div hidden = {hide}>  <Statistics g = {good} n = {neutral} b = {bad}/> </div>
    <div hidden = {!hide}>No feedback given</div>
    </div>
  );
}

export default App;
