import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice'


const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch()
  // const deleteTodo = (todoId) => {
  //   dispatch(removeTodo({todoId}))
  // }

  // const chekedTodoCompleted = (todoId) => {
  //   dispatch(toggleTodoCompleted({todoId}))
  // } 

  return (
    <li>
        <input
            type='checkbox'
            checked={completed}
            onChange={() => dispatch(toggleTodoCompleted({id}))}
            // onChange={() => chekedTodoCompleted(id)}
            />
          <span>{text}</span>
          <span className='delete' onClick={() => dispatch(removeTodo({id}))}
          // <span className='delete' onClick={() => deleteTodo(id)}
          >
            &times;
          </span>

    </li>
  )
}

export default TodoItem