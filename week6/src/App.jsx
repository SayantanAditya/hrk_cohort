  import React, { useState } from 'react';
  
  function App() {
    return (<>
     <CardWrapper Inner={TextComponent} />
     <CardWrapper Inner={TextComponent1} />
    </>
     
    )
    
  }

  function TextComponent() {
    return <div>
      hi there
    </div>
  }

  function TextComponent1() {
    return <div>
      hi there wsup
    </div>
  }

  function CardWrapper({Inner}){
    return(
      <div style={{ border: '2px solid black' }}>
      <Inner />
    </div>
    )
  }
  

  export default App
