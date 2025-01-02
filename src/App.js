import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count , setCount] = useState(0);

  //let count = 0;

  const increment = ()=>{
    //count +=1;
    setCount(count+1)
  };

  const decrement = ()=>{
    //count -=1;
    setCount(count-1)
  };

  useEffect(()=>{
    // what I want to do
    console.log("new count is: "+count);
  },[count] // dependency array
  )

  return (
    
    <>
      <span className='title'>This is a Counter</span>
      <p className='count'>The count is {count}</p>
      <button onClick={increment} className='button'>+</button>
      <button onClick={decrement} className='button'>-</button>
    </>
    
  );
}

export default App;
