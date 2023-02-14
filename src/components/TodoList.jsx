import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleTodoCompleted, removeTodo}) => {
  return (
    <ul>
        {
            todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodoCompleted={toggleTodoCompleted}
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