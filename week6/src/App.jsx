import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("my name is sayantan");

  function updateName(){
    setName("my name is " + Math.random());
  }
  return (
  <>
  
  <button onClick={updateName}>Click me to change the title</button>
  <Header title={name}></Header>
  <Header title="my name is sayantan2"></Header>
  
  </>

  )
}

function Header({title}) {
  return(
    <div>
    {title}
    </div>
  )
}

export default App
