import { useState, useEffect } from 'react';
import axios from 'axios';

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {

    // setInterval(()=>{
    //   axios.get("https://sum-server.100xdevs.com/todos")
    //   .then(res => {
    //     setTodos(res.data.todos);
    //     setLoading(false);
    //   });
    // }, n*1000)
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      });
      
  }, []);

  return {todos, loading};
}

function App() {
  const {todos , loading}  = useTodos();

  if (loading) {
    return <div> loading ....</div>
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;