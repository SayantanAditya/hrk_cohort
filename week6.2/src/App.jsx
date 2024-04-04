import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('https://sum-server.100xdevs.com/todo')
        .then((res) => {
          if (Array.isArray(res.data.todos)) {
            setTodos(res.data.todos);
          } else {
            console.error('Todos is not an array:', res.data.todos);
          }
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
        });
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <>
      {todos.map(({ title, description }, index) => (
        <Todo key={index} title={title} description={description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
