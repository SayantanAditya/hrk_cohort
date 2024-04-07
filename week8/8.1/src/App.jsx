import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500'>Red</div>
      <div className='bg-blue-500'>Blue</div>
      <div className='bg-yellow-500'>Yellow</div>
    </div>
  )
}

export default App
