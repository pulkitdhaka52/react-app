
import React, {useState} from 'react';

export default function App(){
  const [count, setCount] = useState(0);

  const handleClick = ()=>{
    setInterval(()=>{
      debugger;
      setCount(count+1);
    },500)
  }
  return( 
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}