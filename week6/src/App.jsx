  import React, { Children, useState } from 'react';
  
  function App() {
    return (<>
     <CardWrapper>
      hi there
     </CardWrapper>
     
    </>
     
    )
    
  }

 
  function CardWrapper({children}){
    return(
      <div style={{ border: '2px solid black' , padding: '10px', margin: '5px' }}>
      {children}
    </div>
    )
  }
  

  export default App
