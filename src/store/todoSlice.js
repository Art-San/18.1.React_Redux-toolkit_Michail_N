import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo() {},
        removeTodo() {},
        toggleTodoCompleted() {}

    }
})
