import { Positive } from "./Positive";
import { Average } from "./Average";

export function Statistics({good, neutral, bad}){
  const total = good + neutral + bad
    if(total === 0) return(<div>No feedback given</div>);
    
   return(
        
      <div>
        <table>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td><Average good={good} neutral={neutral} bad={bad}/> </td>
          </tr>
          <tr>
            <td>positive</td>
            <td><Positive good={good} neutral={neutral} bad={bad} /></td>
          </tr>   
        </table>
      </div>
    );
  }