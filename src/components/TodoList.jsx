import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <ul>
        {
            todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                    />
                // <TodoItem
                //     key={todo.id}
                //     id={todo.id}
                //     text={todo.text}
                //     completed={todo.completed}
                // />
                )
        }
    </ul>
  )
}

export default TodoList