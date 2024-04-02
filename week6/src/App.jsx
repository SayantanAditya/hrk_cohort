  import React, { useState } from 'react';
  let count=4;
  function App() {
    const [todos,setTodos] = useState([{
      id:1,
      title:"go to gym",
      description:"go to gym today"
    },{
      id:2,
      title:"go to eat",
      description:"go to eat today"
    },
    {
      id:3,
      title:"go to sleep",
      description:"go to sleep today"
    }
  ])

  function addTodo() {
    setTodos([...todos,{
      id: count++,
      title:Math.random(),
      description:Math.random()
    }])
  }

    return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
    </>

    )
  }

  function Todo({title,description}){
    return(
      <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    )
  }
  

  export default App
