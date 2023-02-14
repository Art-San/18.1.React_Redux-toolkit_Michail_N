import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  const removeTodo = (todoId) => {
    // setTodos(todos.filter(t => t.id !== todoId))
  }

  const toggleTodoCompleted = (todoId) => {
    
    // setTodos(
    //   todos.map(
    //     todo => {
    //       if (todo.id !== todoId) return todo

    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
          
    //     }
    //   )
    // )
  }

  
  return (
    <div className="App">
     <InputField text={text} handleInput={setText} HandleSubmit={addTask}/>

     <TodoList />
    </div>
  );
}

export default App;
