import { Positive } from "./positiveComponent";
import { Average } from "./averageComponent";

export function Statistics({good, neutral, bad}){
    if(good === 0 && neutral === 0 && bad === 0) return(<div>No feedback given</div>);
    
   else return(
        
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
            <td>{bad + good + neutral}</td>
          </tr>
          <tr>
            <td>average</td>
            <td><Average good = {good} neutral = {neutral} bad = {bad}/> </td>
          </tr>
          <tr>
            <td>positive</td>
            <td><Positive good = {good} neutral = {neutral} bad = {bad} /></td>
          </tr>   
        </table>
      </div>
    );
  }