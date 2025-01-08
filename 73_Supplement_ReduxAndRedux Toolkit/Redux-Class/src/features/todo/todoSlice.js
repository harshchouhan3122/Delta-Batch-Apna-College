// reducers related to todo

import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: "abc", task: "demo-task", isDone: false}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),           // to generate a unique id
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);  //direct mutate -> without using spread operator [...todos, newTodo] -> Beacuse of Redux Toolkit
        },

        deleteTodo: (state, action) => {
            // action.payload has id of task which is to be delete
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },

        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true }; // Return a new object with the updated property
                }
                return todo; // Return the original object if no change is needed
            });
        },

    }
})

// Action creators (Objects) are generated for each case reducer function by Redux Toolkit
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;           // exporting an object -> directly pass it to reducer: