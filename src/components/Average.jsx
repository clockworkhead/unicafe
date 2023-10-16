export function Average({good, neutral, bad}){
    const avg = ((good - bad) / (good + neutral + bad)) * 100
    return(
      <div>
         {avg}
      </div>
    );
  }

  export default Average