import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const tpdoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isDone = true;
            }
        },
        markAsNotDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isDone = false;
            }
        },
    }
})
export const { addTodo, deleteTodo, markAsDone, markAsNotDone } = tpdoSlice.actions;
export default tpdoSlice.reducer;