import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            console.log('state', state.todos)
            console.log('action', action)
            state.todos.push({
                id: new Date().toString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
                )
        },
        toggleTodoCompleted(state, action) {
           const toggledTodo = state.todos.find(
                todo => todo.id === action.payload.id
                )
                toggledTodo.completed = !toggledTodo.completed

        }

    }
})

export const { addTodo, toggleTodoCompleted, removeTodo } = todoSlice.actions
export default todoSlice.reducer