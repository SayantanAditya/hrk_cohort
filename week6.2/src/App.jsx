import React, { useState } from 'react'

function App() {
  const [inputvalue, setInputvalue] = useState(1);
  const [counter, setCounter] = useState(0);
  let count = 0;
  for( let i =1;i<=inputvalue;i++){count=count+i;}
  return (
    <div>
      <input onChange={(e)=>{setInputvalue(e.target.value)}} placeholder='Find sum from 1 to n'></input>
      <br></br>
      Sum from 1 to {inputvalue} is {count}
      <br />
      <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
    </div>
  )
}

export default App;