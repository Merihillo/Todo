import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosReducer: (state, action) => {
            state.todos = action.payload;
            console.log (state.todos);
        },
        addTodoReducer:(state, action) => {
            state.todos.push(action.payload)
        },
        hideComplitedReducer:(state) => {
            state.todos = state.todos.filter(todo => !todo.isComplited)
        },
        updateTodoReducer: (state, action) => {
            state.todos =  state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.isComplited = !todo.isComplited
                }
                return todo;
            })
        },
        deleteTodoReducer:(state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        }
    },
});

export const {
    setTodosReducer,
    addTodoReducer,
    updateTodoReducer,
    hideComplitedReducer,
    deleteTodoReducer
} = todosSlice.actions;

export default todosSlice.reducer;