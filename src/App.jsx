import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  

console.log("todos",todos)
  const addTodo = () => {
    console.log(text)
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toString(),
          text: text,
          completed: false
        } 
      ])
      setText('')
    }
    
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(t => t.id !== todoId))
  }

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo

          return {
            ...todo,
            completed: !todo.completed
          }
          
        }
      )
    )
  }

  
  return (
    <div className="App">
     <InputField text={text} handleInput={setText} HandleSubmit={addTodo}/>

     <TodoList todos={todos} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted} />
    </div>
  );
}

export default App;
