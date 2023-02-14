import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {},
        toggleTodoCompleted(state, action) {}

    }
})

export const { addTodo, toggleTodoCompleted, removeTodo } = todoSlice.actions
export default todoSlice.reducer