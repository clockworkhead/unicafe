export function Positive({good, neutral, bad}){
    const pos = good / (good + neutral + bad)
    return(
      <div>
       {pos} %
      </div>
    );
  }

  export default Positive