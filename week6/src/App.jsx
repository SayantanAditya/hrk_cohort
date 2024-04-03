import React from 'react'
import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => 
  {
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todo')
      .then(async(res) => {
        const json = await res.json();
        setTodos(json.todos);
      }) 
    },1000)
  },[])
  return (
    <>
      {todos.map(({title, description}) => <Todo title={title} description={description} />)}
    
    </>
  )
}

function Todo({title,description}) {
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}

export default App