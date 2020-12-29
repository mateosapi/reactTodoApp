import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';
import {Typography, BottomNavigation} from '@material-ui/core'

function App() {
  const[todos, setTodos] = useState([]);

  const toggleComplete = (title) => {
    setTodos(
      todos.map(todo => {
        if (todo.title == title){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const deleteTodo = (title) => {
    setTodos(
      todos.filter(todo => todo.title != title)
    );
  }
 
  return (
    <div className="App">
      <Typography variant="h1" style={{padding: 32}}>
        React TodoList
      </Typography>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      <footer id="footer">
        <Typography>
          Made with React and Material-UI by Mateo Sapiurka
        </Typography>
      </footer>
    </div>
    
  );
}

export default App;
